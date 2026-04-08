use crate::build::build_book;
use crate::serve::serve;
use anyhow::{bail, Context, Result};
use log::info;
use mdbook_driver::MDBook;
use mdbook_i18n_helpers::renderers::Xgettext;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::process::Command;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Translations {
    pub submodules: Vec<Vec<PathBuf>>,
    pub books: BTreeMap<String, Book>,
    #[serde(skip)]
    base: PathBuf,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Book {
    pub path: PathBuf,
    pub translations: Vec<Translation>,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Translation {
    pub id: String,
    pub name: String,
}

#[allow(unused)]
#[derive(Clone, Debug)]
pub struct TranslationStat {
    pub name: String,
    pub title: String,
    pub langs: HashMap<String, TranslationLangStat>,
}

#[allow(unused)]
#[derive(Clone, Debug)]
pub struct TranslationLangStat {
    pub lang_name: String,
    pub total_text: usize,
    pub translated_text: usize,
    pub translation_ratio: f32,
}

impl Translations {
    pub fn load() -> Result<Self> {
        let base = std::env::var("CARGO_MANIFEST_DIR").unwrap();
        let base = PathBuf::from(base);

        let toml = base.join("translations.toml");
        let toml = std::fs::read_to_string(toml)?;
        let mut toml: Translations = toml::from_str(&toml)?;
        toml.base = base;

        Ok(toml)
    }

    pub fn save(&self) -> Result<()> {
        let mut text = String::new();
        text.push_str(&toml::to_string_pretty(&self)?);

        let toml = self.base.join("translations.toml");
        std::fs::write(&toml, text.as_bytes())?;
        Ok(())
    }

    pub fn build(&self) -> Result<()> {
        self.update_submodule()?;

        for (name, book) in &self.books {
            let src_path = self.src_path(&book.path);
            let dst_path = self.dst_path(name);
            let po_path = self.po_path(name);

            build_book(name, &book, &src_path, &dst_path, &po_path, None)?;
        }
        Ok(())
    }

    pub fn add(&mut self, name: &str, lang_id: &str, lang_name: &str) -> Result<()> {
        if let Some(book) = self.books.get(name) {
            let src_path = self.src_path(&book.path);
            let po_path = self.po_path(name);

            self.update_submodule()?;
            extract_pot(&src_path, &po_path)?;

            let lang_po = po_path.join(format!("{lang_id}.po"));

            if lang_po.exists() {
                bail!("Language {lang_id} for {name} alreay exists");
            }

            info!("Creating language resource {}", lang_po.to_string_lossy());

            Command::new("msginit")
                .arg("--no-translator")
                .arg("-i")
                .arg(po_path.join("messages.pot"))
                .arg("-l")
                .arg(lang_id)
                .arg("-o")
                .arg(&lang_po)
                .output()
                .with_context(|| "failed to call msginit")?;

            let new_trans = Translation {
                id: lang_id.to_string(),
                name: lang_name.to_string(),
            };

            self.books
                .entry(name.to_string())
                .and_modify(|x| x.translations.push(new_trans));

            self.save()?;
        }

        Ok(())
    }

    pub fn update(&self, name: &str, lang_id: &str) -> Result<()> {
        if let Some(book) = self.books.get(name) {
            let src_path = self.src_path(&book.path);
            let po_path = self.po_path(name);

            self.update_submodule()?;
            extract_pot(&src_path, &po_path)?;

            let lang_po = po_path.join(format!("{lang_id}.po"));

            if !lang_po.exists() {
                bail!("Language {lang_id} for {name} is not found");
            }

            Command::new("msgmerge")
                .arg("--update")
                .arg(&lang_po)
                .arg(po_path.join("messages.pot"))
                .output()?;
        }

        Ok(())
    }

    pub fn serve(&self, name: &str, lang_id: &str, hostname: &str, port: &str) -> Result<()> {
        if let Some(book) = self.books.get(name) {
            let src_path = self.src_path(&book.path);
            let dst_path = self.dst_path(name);
            let po_path = self.po_path(name);

            serve(
                name, book, &src_path, &dst_path, &po_path, lang_id, hostname, port,
            )?;
        }

        Ok(())
    }

    pub fn stat(&self) -> Result<Vec<TranslationStat>> {
        self.update_submodule()?;

        let mut ret = Vec::new();

        for (name, book) in &self.books {
            let src_path = self.src_path(&book.path);
            let po_path = self.po_path(name);
            let mdbook = MDBook::load(&src_path)?;
            let title = mdbook.config.book.title.unwrap_or("".to_string());

            let mut stat = TranslationStat {
                name: name.clone(),
                title: title.clone(),
                langs: HashMap::new(),
            };

            for lang in &book.translations {
                let lang_po = po_path.join(format!("{}.po", lang.id));
                let catalog = polib::po_file::parse(&lang_po)?;
                let total_text = catalog.count();
                let translated_text = catalog.messages().filter(|x| x.is_translated()).count();
                let translation_ratio = translated_text as f32 / total_text as f32;

                let lang_stat = TranslationLangStat {
                    lang_name: lang.name.clone(),
                    total_text,
                    translated_text,
                    translation_ratio,
                };
                stat.langs.insert(lang.id.clone(), lang_stat);
            }
            ret.push(stat);
        }

        Ok(ret)
    }

    /// Validate that each (book, language) build under `dst_path` actually has
    /// the language picker injected and the expected `<html lang>` attribute.
    /// This catches silent regressions where mdbook produced output but our
    /// post-processing (additional-js, gettext, …) was skipped.
    pub fn verify_build(&self) -> Result<()> {
        let mut errors = Vec::new();

        for (name, book) in &self.books {
            let dst_path = self.dst_path(name);
            if !dst_path.exists() {
                errors.push(format!("{name}: build directory {dst_path:?} is missing"));
                continue;
            }

            // English (original) build at dst_path/, then each lang at dst_path/<lang>/.
            let mut variants: Vec<(String, PathBuf)> = Vec::new();
            variants.push(("en".to_string(), dst_path.clone()));
            for lang in &book.translations {
                variants.push((lang.id.clone(), dst_path.join(&lang.id)));
            }

            let po_path = self.po_path(name);
            let en_root = dst_path.clone();
            for (lang_id, root) in &variants {
                if let Err(e) = verify_variant(name, lang_id, root) {
                    errors.push(e);
                }
                if lang_id != "en" {
                    let lang_po = po_path.join(format!("{lang_id}.po"));
                    if let Err(e) =
                        verify_translation_applied(name, lang_id, &en_root, root, &lang_po)
                    {
                        errors.push(e);
                    }
                }
            }
        }

        if !errors.is_empty() {
            for e in &errors {
                log::error!("{e}");
            }
            bail!("verify_build found {} issue(s)", errors.len());
        }
        Ok(())
    }

    fn src_path(&self, path: &Path) -> PathBuf {
        self.base.join(path)
    }

    fn dst_path(&self, name: &str) -> PathBuf {
        self.base.join("build").join(name)
    }

    fn po_path(&self, name: &str) -> PathBuf {
        self.base.join("translations").join(name)
    }

    fn update_submodule(&self) -> Result<()> {
        for submodule in &self.submodules {
            let mut base: Option<PathBuf> = None;
            for path in submodule {
                if let Some(base) = &base {
                    info!(
                        "Update submodule {} from {}",
                        path.to_string_lossy(),
                        base.to_string_lossy()
                    );
                    Command::new("git")
                        .arg("-C")
                        .arg(base)
                        .arg("submodule")
                        .arg("update")
                        .arg("--init")
                        .arg(path)
                        .output()?;
                } else {
                    info!("Update submodule {}", path.to_string_lossy());
                    Command::new("git")
                        .arg("submodule")
                        .arg("update")
                        .arg("--init")
                        .arg(path)
                        .output()?;
                }
                base = Some(base.map_or(path.clone(), |x: PathBuf| x.join(path)));
            }
        }

        Ok(())
    }
}

/// Run structural checks on a single (book, lang) build output rooted at `root`.
fn verify_variant(book: &str, lang_id: &str, root: &Path) -> Result<(), String> {
    let label = format!("{book}/{lang_id}");

    // mdbook fingerprints additional-css/js, so match by prefix/suffix.
    let theme_dir = root.join("theme");
    let theme_entries: Vec<String> = std::fs::read_dir(&theme_dir)
        .map_err(|e| format!("{label}: cannot read {theme_dir:?}: {e}"))?
        .filter_map(|e| e.ok())
        .map(|e| e.file_name().to_string_lossy().into_owned())
        .collect();
    let has_picker_js = theme_entries
        .iter()
        .any(|f| f.starts_with("language-picker") && f.ends_with(".js"));
    let has_picker_css = theme_entries
        .iter()
        .any(|f| f.starts_with("language-picker") && f.ends_with(".css"));
    if !has_picker_js {
        return Err(format!("{label}: language-picker JS missing under {theme_dir:?}"));
    }
    if !has_picker_css {
        return Err(format!("{label}: language-picker CSS missing under {theme_dir:?}"));
    }

    let index_html = root.join("index.html");
    let html = std::fs::read_to_string(&index_html)
        .map_err(|e| format!("{label}: cannot read {index_html:?}: {e}"))?;

    if !html.contains("language-picker") {
        return Err(format!(
            "{label}: {index_html:?} does not reference language-picker"
        ));
    }
    let expected_lang_attr = format!("<html lang=\"{lang_id}\"");
    if !html.contains(&expected_lang_attr) {
        return Err(format!(
            "{label}: {index_html:?} missing `{expected_lang_attr}…>`"
        ));
    }
    Ok(())
}

/// Confirm gettext actually applied translations by sampling up to
/// `MAX_SAMPLES` translated PO entries and checking that their msgstr prefixes
/// appear in the rendered HTML. PO entries whose msgid is no longer present in
/// the English render are treated as stale (PO/source drift) and skipped, not
/// failed. A strict majority of the remaining samples must pass.
fn verify_translation_applied(
    book: &str,
    lang_id: &str,
    en_root: &Path,
    lang_root: &Path,
    lang_po: &Path,
) -> Result<(), String> {
    const MAX_SAMPLES: usize = 20;
    let label = format!("{book}/{lang_id}");

    if !lang_po.exists() {
        return Ok(());
    }
    let catalog = polib::po_file::parse(lang_po)
        .map_err(|e| format!("{label}: failed to parse {lang_po:?}: {e}"))?;

    let mut html_cache: HashMap<PathBuf, Option<String>> = HashMap::new();
    let mut load = |path: &Path| -> Option<String> {
        if let Some(v) = html_cache.get(path) {
            return v.clone();
        }
        let v = std::fs::read_to_string(path).ok();
        html_cache.insert(path.to_path_buf(), v.clone());
        v
    };

    let mut checked = 0usize;
    let mut passed = 0usize;
    let mut last_failure: Option<(String, String)> = None; // (html_rel, needle)

    for msg in catalog.messages() {
        if checked >= MAX_SAMPLES {
            break;
        }
        if !msg.is_translated() {
            continue;
        }
        let Ok(msgstr) = msg.msgstr() else { continue };
        let msgid = msg.msgid();
        if msgstr.is_empty() || msgstr == msgid || msgstr.len() < 8 || msgid.len() < 8 {
            continue;
        }
        if !is_plain(msgstr) || !is_plain(msgid) {
            continue;
        }

        let html_rel = msg.source().split_whitespace().find_map(|loc| {
            let path_part = loc.split(':').next()?;
            let stripped = path_part.strip_prefix("src/").unwrap_or(path_part);
            if !stripped.ends_with(".md") || stripped.ends_with("SUMMARY.md") {
                return None;
            }
            Some(format!("{}.html", &stripped[..stripped.len() - 3]))
        });
        let Some(html_rel) = html_rel else { continue };

        let en_full = en_root.join(&html_rel);
        let lang_full = lang_root.join(&html_rel);

        let Some(en_html) = load(&en_full) else { continue };
        let msgid_needle: String = msgid.chars().take(40).collect();
        // Stale PO entry: msgid no longer present even in the English render.
        // gettext can't apply it; skip rather than blame the build.
        if !en_html.contains(&msgid_needle) {
            continue;
        }

        let Some(lang_html) = load(&lang_full) else { continue };
        let needle: String = msgstr.chars().take(40).collect();
        checked += 1;
        if lang_html.contains(&needle) {
            passed += 1;
        } else {
            last_failure = Some((html_rel, needle));
        }
    }

    if checked == 0 {
        // No usable samples (empty PO, drift, or all msgids contain tricky chars).
        return Ok(());
    }
    if passed * 2 <= checked {
        let detail = last_failure
            .map(|(p, n)| format!("e.g. `{n}` not in {p}"))
            .unwrap_or_else(|| "no example captured".to_string());
        return Err(format!(
            "{label}: translation not applied ({passed}/{checked} samples passed; {detail})"
        ));
    }
    Ok(())
}

/// True iff `s` survives mdbook rendering verbatim (no HTML-escaped chars,
/// template markers, or line breaks).
fn is_plain(s: &str) -> bool {
    !s.chars()
        .any(|c| matches!(c, '<' | '>' | '&' | '{' | '}' | '\n' | '\r'))
}

fn extract_pot(src_path: &Path, po_path: &Path) -> Result<()> {
    let mut mdbook = MDBook::load(&src_path)?;
    mdbook.config.build.build_dir = PathBuf::from(po_path);
    let renderer = Xgettext {};
    mdbook.with_renderer(renderer);
    mdbook.build()?;

    Ok(())
}
