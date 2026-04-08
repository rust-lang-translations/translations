use crate::build::build_book;
use crate::serve::serve;
use anyhow::{bail, Context, Result};
use log::{info, warn};
use mdbook_driver::book::BookItem;
use mdbook_driver::MDBook;
use mdbook_i18n_helpers::extract_messages;
use mdbook_i18n_helpers::renderers::Xgettext;
use polib::message::{MessageMutView, MessageView};

use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::collections::HashMap;
use std::collections::HashSet;
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

            run_checked(
                Command::new("msginit")
                    .arg("--no-translator")
                    .arg("-i")
                    .arg(po_path.join("messages.pot"))
                    .arg("-l")
                    .arg(lang_id)
                    .arg("-o")
                    .arg(&lang_po),
                "msginit",
            )?;

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

    pub fn import(
        &self,
        name: &str,
        lang_id: &str,
        src_dir: &Path,
        en_src: Option<&Path>,
        overwrite: bool,
        fuzzy: Option<f32>,
    ) -> Result<()> {
        let Some(book) = self.books.get(name) else {
            bail!("book {name} is not found in translations.toml");
        };

        let src_path = self.src_path(&book.path);
        let po_path = self.po_path(name);

        self.update_submodule()?;
        extract_pot(&src_path, &po_path)?;

        let lang_po = po_path.join(format!("{lang_id}.po"));
        if !lang_po.exists() {
            bail!("Language {lang_id} for {name} is not found; run `add` first");
        }

        // Collect (relative_path, english_text) pairs. With `--en-src` we walk
        // that directory; otherwise we walk the upstream MDBook chapters.
        let en_pairs: Vec<(PathBuf, String)> = if let Some(en_root) = en_src {
            let mut out = Vec::new();
            collect_md_files(en_root, en_root, &mut out)?;
            out
        } else {
            let mdbook = MDBook::load(&src_path)?;
            mdbook
                .book
                .iter()
                .filter_map(|item| {
                    let BookItem::Chapter(chapter) = item else { return None };
                    let rel = chapter.source_path.as_ref()?.clone();
                    if rel.file_name().map(|n| n == "SUMMARY.md").unwrap_or(false) {
                        return None;
                    }
                    Some((rel, chapter.content.clone()))
                })
                .collect()
        };

        let mut map: HashMap<String, String> = HashMap::new();
        let mut paired_files = 0usize;
        let mut missing_files = 0usize;
        let mut mismatched_files = 0usize;
        let mut partial_pairs = 0usize;

        for (rel, en_text) in &en_pairs {
            let translated_path = src_dir.join(rel);
            if !translated_path.exists() {
                missing_files += 1;
                warn!(
                    "import: translated file not found, skipping: {}",
                    translated_path.to_string_lossy()
                );
                continue;
            }

            let ja_text = std::fs::read_to_string(&translated_path)
                .with_context(|| format!("failed to read {}", translated_path.to_string_lossy()))?;

            let en_msgs = match extract_messages(en_text) {
                Ok(v) => v,
                Err(e) => {
                    warn!("import: failed to parse english {}: {e}", rel.to_string_lossy());
                    continue;
                }
            };
            let ja_msgs = match extract_messages(&ja_text) {
                Ok(v) => v,
                Err(e) => {
                    warn!(
                        "import: failed to parse translated {}: {e}",
                        translated_path.to_string_lossy()
                    );
                    continue;
                }
            };

            if en_msgs.len() != ja_msgs.len() {
                mismatched_files += 1;
                let added = signature_align(&en_msgs, &ja_msgs, &mut map);
                partial_pairs += added;
                warn!(
                    "import: structure mismatch for {} (en={}, {lang_id}={}); \
                     partial-aligned {added} pair(s)",
                    rel.to_string_lossy(),
                    en_msgs.len(),
                    ja_msgs.len()
                );
                continue;
            }

            paired_files += 1;
            for ((_, en), (_, ja)) in en_msgs.iter().zip(ja_msgs.iter()) {
                if en.message == ja.message {
                    continue;
                }
                map.entry(en.message.clone()).or_insert_with(|| ja.message.clone());
            }
        }

        let mut catalog = polib::po_file::parse(&lang_po)
            .with_context(|| format!("failed to parse {}", lang_po.to_string_lossy()))?;

        // Track which map keys got applied exactly so we can fuzzy-match the rest.
        let mut exact_keys: HashSet<&String> = HashSet::new();
        let mut filled = 0usize;
        let mut skipped_existing = 0usize;
        for mut msg in catalog.messages_mut() {
            let Some((key, new_msgstr)) = map.get_key_value(msg.msgid()) else {
                continue;
            };
            exact_keys.insert(key);
            if msg.is_translated() && !overwrite {
                skipped_existing += 1;
                continue;
            }
            if msg.set_msgstr(new_msgstr.clone()).is_ok() {
                filled += 1;
            }
        }

        let mut fuzzied = 0usize;
        if let Some(threshold) = fuzzy {
            // Build a shingle index over untranslated po msgids, then for each
            // unused map entry pick the best similarity match above threshold.
            let candidates: Vec<(&String, &String)> = map
                .iter()
                .filter(|(k, _)| !exact_keys.contains(*k))
                .collect();
            if !candidates.is_empty() {
                let untranslated: Vec<String> = catalog
                    .messages()
                    .filter(|m| !m.is_translated())
                    .map(|m| m.msgid().to_string())
                    .collect();
                let index = ShingleIndex::build(&untranslated);
                let mut picks: HashMap<String, &String> = HashMap::new();
                let mut pick_scores: HashMap<String, f32> = HashMap::new();
                for (en, ja) in &candidates {
                    if let Some((target, score)) = index.best_match(en, threshold) {
                        if pick_scores.get(&target).copied().unwrap_or(0.0) < score {
                            pick_scores.insert(target.clone(), score);
                            picks.insert(target, *ja);
                        }
                    }
                }
                for mut msg in catalog.messages_mut() {
                    let Some(new_msgstr) = picks.get(msg.msgid()) else {
                        continue;
                    };
                    if msg.is_translated() {
                        continue;
                    }
                    if msg.set_msgstr((*new_msgstr).clone()).is_ok() {
                        msg.flags_mut().add_flag("fuzzy");
                        fuzzied += 1;
                    }
                }
            }
        }

        polib::po_file::write(&catalog, &lang_po)
            .with_context(|| format!("failed to write {}", lang_po.to_string_lossy()))?;

        info!(
            "import: filled {filled} (+{fuzzied} fuzzy) msgstr(s) into {} \
             (paired files: {paired_files}, missing: {missing_files}, \
             mismatched: {mismatched_files} [partial pairs: {partial_pairs}], \
             kept-existing: {skipped_existing})",
            lang_po.to_string_lossy()
        );

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

            run_checked(
                Command::new("msgmerge")
                    .arg("--update")
                    .arg(&lang_po)
                    .arg(po_path.join("messages.pot")),
                "msgmerge",
            )?;
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

    // Xgettext writes to `<build_dir>/xgettext/messages.pot`. Mirror it to
    // `<po_path>/messages.pot` so that msginit/msgmerge (and other tooling)
    // can find it at the conventional top-level location.
    let nested = po_path.join("xgettext").join("messages.pot");
    let top = po_path.join("messages.pot");
    if nested.exists() {
        std::fs::copy(&nested, &top)
            .with_context(|| format!("failed to copy {nested:?} -> {top:?}"))?;
    }

    Ok(())
}

/// Pair `(en, ja)` paragraphs from a structurally-mismatched file by matching
/// their inline-code signature: a sorted set of `` `code` `` spans (which the
/// translator typically preserves verbatim). Adds successful pairs to `map`
/// and returns the number of pairs added.
fn signature_align(
    en: &[(usize, mdbook_i18n_helpers::ExtractedMessage)],
    ja: &[(usize, mdbook_i18n_helpers::ExtractedMessage)],
    map: &mut HashMap<String, String>,
) -> usize {
    let en_sigs: Vec<Vec<String>> = en.iter().map(|(_, m)| code_signature(&m.message)).collect();
    let ja_sigs: Vec<Vec<String>> = ja.iter().map(|(_, m)| code_signature(&m.message)).collect();
    let mut used = vec![false; ja.len()];
    let mut added = 0usize;
    for (i, e_sig) in en_sigs.iter().enumerate() {
        if e_sig.is_empty() {
            continue;
        }
        for (j, j_sig) in ja_sigs.iter().enumerate() {
            if used[j] || j_sig != e_sig {
                continue;
            }
            let en_text = &en[i].1.message;
            let ja_text = &ja[j].1.message;
            if en_text != ja_text {
                map.entry(en_text.clone())
                    .or_insert_with(|| ja_text.clone());
                added += 1;
            }
            used[j] = true;
            break;
        }
    }
    added
}

/// Sorted list of inline `` `code` `` spans containing at least one
/// alphanumeric character. Used as a structural fingerprint for paragraph
/// alignment when paragraph counts differ between source and translation.
fn code_signature(text: &str) -> Vec<String> {
    let mut sigs: Vec<String> = Vec::new();
    let mut chars = text.chars().peekable();
    while let Some(c) = chars.next() {
        if c != '`' {
            continue;
        }
        let mut buf = String::new();
        while let Some(&next) = chars.peek() {
            chars.next();
            if next == '`' {
                break;
            }
            buf.push(next);
        }
        if buf.chars().any(|c| c.is_alphanumeric()) {
            sigs.push(buf);
        }
    }
    sigs.sort();
    sigs
}

/// Word-trigram inverted index for fast Jaccard similarity lookup over a
/// collection of (English) msgids. Used by `import --fuzzy`.
struct ShingleIndex {
    msgs: Vec<String>,
    shingles: Vec<HashSet<String>>,
    inverted: HashMap<String, Vec<usize>>,
}

impl ShingleIndex {
    fn build(msgs: &[String]) -> Self {
        let mut shingles = Vec::with_capacity(msgs.len());
        let mut inverted: HashMap<String, Vec<usize>> = HashMap::new();
        for (idx, msg) in msgs.iter().enumerate() {
            let s = shingles_of(msg);
            for sh in &s {
                inverted.entry(sh.clone()).or_default().push(idx);
            }
            shingles.push(s);
        }
        Self {
            msgs: msgs.to_vec(),
            shingles,
            inverted,
        }
    }

    fn best_match(&self, query: &str, threshold: f32) -> Option<(String, f32)> {
        let q = shingles_of(query);
        if q.is_empty() {
            return None;
        }
        let mut counts: HashMap<usize, usize> = HashMap::new();
        for sh in &q {
            if let Some(idxs) = self.inverted.get(sh) {
                for &idx in idxs {
                    *counts.entry(idx).or_insert(0) += 1;
                }
            }
        }
        let mut best: Option<(usize, f32)> = None;
        for (idx, intersect) in counts {
            let union = q.len() + self.shingles[idx].len() - intersect;
            if union == 0 {
                continue;
            }
            let score = intersect as f32 / union as f32;
            if score >= threshold && best.map(|(_, s)| score > s).unwrap_or(true) {
                best = Some((idx, score));
            }
        }
        best.map(|(idx, score)| (self.msgs[idx].clone(), score))
    }
}

fn shingles_of(text: &str) -> HashSet<String> {
    let words: Vec<String> = text
        .split_whitespace()
        .map(|w| w.trim_matches(|c: char| !c.is_alphanumeric()).to_lowercase())
        .filter(|w| !w.is_empty())
        .collect();
    let mut out = HashSet::new();
    if words.len() < 3 {
        for w in words {
            out.insert(w);
        }
        return out;
    }
    for i in 0..=words.len() - 3 {
        out.insert(format!("{} {} {}", words[i], words[i + 1], words[i + 2]));
    }
    out
}

/// Recursively collect (path-relative-to-`root`, file contents) for every
/// `*.md` file under `dir`, skipping `SUMMARY.md`.
fn collect_md_files(root: &Path, dir: &Path, out: &mut Vec<(PathBuf, String)>) -> Result<()> {
    for entry in std::fs::read_dir(dir)
        .with_context(|| format!("failed to read dir {}", dir.to_string_lossy()))?
    {
        let entry = entry?;
        let path = entry.path();
        let file_type = entry.file_type()?;
        if file_type.is_dir() {
            collect_md_files(root, &path, out)?;
            continue;
        }
        if path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }
        if path.file_name().map(|n| n == "SUMMARY.md").unwrap_or(false) {
            continue;
        }
        let rel = path
            .strip_prefix(root)
            .with_context(|| format!("failed to relativize {}", path.to_string_lossy()))?
            .to_path_buf();
        let text = std::fs::read_to_string(&path)
            .with_context(|| format!("failed to read {}", path.to_string_lossy()))?;
        out.push((rel, text));
    }
    Ok(())
}

fn run_checked(cmd: &mut Command, what: &str) -> Result<()> {
    let output = cmd.output().with_context(|| format!("failed to spawn {what}"))?;
    if !output.status.success() {
        bail!(
            "{what} failed (status {}): {}",
            output.status,
            String::from_utf8_lossy(&output.stderr).trim()
        );
    }
    Ok(())
}
