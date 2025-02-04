use crate::build::build_book;
use crate::translations::Book;
use anyhow::Result;
use futures_util::sink::SinkExt;
use futures_util::StreamExt;
use log::{debug, error, info};
use std::collections::HashMap;
use std::fs::FileType;
use std::net::{SocketAddr, ToSocketAddrs};
use std::path::{Path, PathBuf};
use std::time::{Duration, Instant, SystemTime};
use tokio::sync::broadcast;
use warp::ws::Message;
use warp::Filter;

pub const LIVE_RELOAD_ENDPOINT: &str = "__livereload";

pub fn serve(
    name: &str,
    book: &Book,
    src_path: &Path,
    dst_path: &Path,
    po_path: &Path,
    lang_id: &str,
    hostname: &str,
    port: &str,
) -> Result<()> {
    let address = format!("{hostname}:{port}");

    build_book(name, book, src_path, dst_path, po_path, Some(lang_id))?;

    let sockaddr: SocketAddr = address
        .to_socket_addrs()?
        .next()
        .ok_or_else(|| anyhow::anyhow!("no address found for {}", address))?;

    // A channel used to broadcast to any websockets to reload when a file changes.
    let (tx, _rx) = tokio::sync::broadcast::channel::<Message>(100);

    let reload_tx = tx.clone();
    let serve_path = dst_path.join(lang_id);
    let _thread_handle = std::thread::spawn(move || {
        serve_main(serve_path, sockaddr, reload_tx);
    });

    let serving_url = format!("http://{address}");
    info!("Serving on: {}", serving_url);

    //rebuild_on_change(book, src_path, dst_path, po_path, lang_id, &move || {
    //    let _ = tx.send(Message::text("reload"));
    //});
    let mut watcher = Watcher::new();
    let po_file = po_path.join(format!("{lang_id}.po"));
    watcher.add(&po_file);

    info!("Watching for changes...");
    watcher.scan();

    const AVG_SIZE: usize = 60;
    let mut avgs = vec![0.0; AVG_SIZE];
    let mut avg_i = 0;

    loop {
        std::thread::sleep(Duration::new(1, 0));
        let start = Instant::now();
        let paths = watcher.scan();
        let elapsed = start.elapsed().as_secs_f64();
        avgs[avg_i] = elapsed;
        avg_i += 1;
        if avg_i >= AVG_SIZE {
            avg_i = 0;
        }

        if !paths.is_empty() {
            info!("Files changed: {paths:?}");
            let _ = build_book(name, book, src_path, dst_path, po_path, Some(lang_id));
            info!("Reload");
            let _ = tx.send(Message::text("reload"));
        }
    }
}

#[derive(PartialEq)]
struct PathData {
    file_type: FileType,
    mtime: SystemTime,
    size: u64,
}

#[derive(Default)]
struct Watcher {
    paths: Vec<PathBuf>,
    path_data: HashMap<PathBuf, PathData>,
}

impl Watcher {
    fn new() -> Watcher {
        Watcher {
            ..Default::default()
        }
    }

    fn add(&mut self, path: &Path) {
        self.paths.push(path.to_path_buf());
    }

    fn scan(&mut self) -> Vec<PathBuf> {
        let new_path_data: HashMap<_, _> = self
            .paths
            .iter()
            .filter_map(|path| {
                let meta = match path.metadata() {
                    Ok(meta) => meta,
                    Err(e) => {
                        debug!("failed to scan {path:?}: {e}");
                        return None;
                    }
                };
                let mtime = meta.modified().unwrap_or(SystemTime::UNIX_EPOCH);
                let pd = PathData {
                    file_type: meta.file_type(),
                    mtime,
                    size: meta.len(),
                };
                let path = path.to_path_buf();
                Some((path, pd))
            })
            .collect();

        let mut paths = Vec::new();
        for (new_path, new_data) in &new_path_data {
            match self.path_data.get(new_path) {
                Some(old_data) => {
                    if new_data != old_data {
                        paths.push(new_path.to_path_buf());
                    }
                }
                None => {
                    paths.push(new_path.clone());
                }
            }
        }

        for old_path in self.path_data.keys() {
            if !new_path_data.contains_key(old_path) {
                paths.push(old_path.to_path_buf());
            }
        }

        self.path_data = new_path_data;
        paths
    }
}

#[tokio::main]
async fn serve_main(
    build_dir: PathBuf,
    address: SocketAddr,
    reload_tx: broadcast::Sender<Message>,
) {
    // A warp Filter which captures `reload_tx` and provides an `rx` copy to
    // receive reload messages.
    let sender = warp::any().map(move || reload_tx.subscribe());

    // A warp Filter to handle the livereload endpoint. This upgrades to a
    // websocket, and then waits for any filesystem change notifications, and
    // relays them over the websocket.
    let livereload = warp::path(LIVE_RELOAD_ENDPOINT)
        .and(warp::ws())
        .and(sender)
        .map(|ws: warp::ws::Ws, mut rx: broadcast::Receiver<Message>| {
            ws.on_upgrade(move |ws| async move {
                let (mut user_ws_tx, _user_ws_rx) = ws.split();
                if let Ok(m) = rx.recv().await {
                    let _ = user_ws_tx.send(m).await;
                }
            })
        });
    // A warp Filter that serves from the filesystem.
    let book_route = warp::fs::dir(build_dir.clone());
    // The fallback route for 404 errors
    let fallback_route = warp::fs::file(build_dir.join("404.html"))
        .map(|reply| warp::reply::with_status(reply, warp::http::StatusCode::NOT_FOUND));
    let routes = livereload.or(book_route).or(fallback_route);

    std::panic::set_hook(Box::new(move |panic_info| {
        // exit if serve panics
        error!("Unable to serve: {}", panic_info);
        std::process::exit(1);
    }));

    warp::serve(routes).run(address).await;
}
