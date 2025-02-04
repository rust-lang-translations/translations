mod build;
mod serve;
mod translations;

use crate::translations::Translations;
use anyhow::Result;
use clap::{Args, Parser, Subcommand};
use fern::Dispatch;
use log::LevelFilter;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
#[command(propagate_version = true)]
pub struct Opt {
    /// No output printed to stdout
    #[arg(long, global = true)]
    pub quiet: bool,

    /// Use verbose output
    #[arg(long, global = true)]
    pub verbose: bool,

    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    Build(OptBuild),
    Add(OptAdd),
    Update(OptUpdate),
    Serve(OptServe),
}

/// Build documents
#[derive(Args)]
pub struct OptBuild {}

/// Add a new translation
#[derive(Args)]
pub struct OptAdd {
    /// Book name
    book: String,
    /// Language ID (ISO 639 language codes)
    lang_id: String,
    /// Language name
    lang_name: String,
}

/// Update the translation
#[derive(Args)]
pub struct OptUpdate {
    /// Book name
    book: String,
    /// Language ID (ISO 639 language codes)
    lang_id: String,
}

/// Update the translation
#[derive(Args)]
pub struct OptServe {
    /// Book name
    book: String,
    /// Language ID (ISO 639 language codes)
    lang_id: String,
    #[arg(long)]
    hostname: Option<String>,
    #[arg(long)]
    port: Option<String>,
}

fn main() -> Result<()> {
    let opt = Opt::parse();

    let level = if opt.verbose {
        LevelFilter::Debug
    } else if opt.quiet {
        LevelFilter::Warn
    } else {
        LevelFilter::Info
    };

    Dispatch::new()
        .format(|out, message, record| {
            out.finish(format_args!(
                "{} {}",
                format!("[{:<5}]", record.level()),
                message
            ))
        })
        .level(level)
        .level_for("mdbook", LevelFilter::Warn)
        .level_for("warp", LevelFilter::Warn)
        .chain(std::io::stderr())
        .apply()?;

    let mut trans = Translations::load()?;

    match opt.command {
        Commands::Build(_) => trans.build()?,
        Commands::Add(x) => trans.add(&x.book, &x.lang_id, &x.lang_name)?,
        Commands::Update(x) => trans.update(&x.book, &x.lang_id)?,
        Commands::Serve(x) => {
            let hostname = x.hostname.unwrap_or("127.0.0.1".to_string());
            let port = x.port.unwrap_or("3000".to_string());
            trans.serve(&x.book, &x.lang_id, &hostname, &port)?
        }
    }

    Ok(())
}
