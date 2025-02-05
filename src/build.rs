use crate::serve::LIVE_RELOAD_ENDPOINT;
use crate::translations::Book;
use anyhow::Result;
use log::info;
use mdbook::MDBook;
use mdbook_i18n_helpers::preprocessors::Gettext;
use std::fs::OpenOptions;
use std::io::Write;
use std::path::{Path, PathBuf};
use tera::Tera;

pub fn build_book(
    name: &str,
    book: &Book,
    src_path: &Path,
    dst_path: &Path,
    po_path: &Path,
    serve: Option<&str>,
) -> Result<()> {
    let mut mdbook = MDBook::load(&src_path)?;
    mdbook.config.build.build_dir = PathBuf::from(dst_path);

    let mut tmpl = Tera::default();
    tmpl.add_raw_template("lang-picker-js", LANG_PICKER_JS)?;
    tmpl.add_raw_template("head-hbs", HEAD_HBS)?;

    let mut context = tera::Context::new();
    context.insert("name", name);
    context.insert("langs", &book.translations);
    let lang_picker_js = tmpl.render("lang-picker-js", &context)?;
    let head_hbs = tmpl.render("head-hbs", &context)?;

    let theme_dir = mdbook.theme_dir();
    if !theme_dir.exists() {
        std::fs::create_dir(&theme_dir)?;
    }
    let js_path = theme_dir.join("language-picker.js");
    let css_path = theme_dir.join("language-picker.css");
    let head_path = theme_dir.join("head.hbs");
    let head_backup = theme_dir.join("head.hbs.bak");

    std::fs::write(&js_path, lang_picker_js)?;
    std::fs::write(&css_path, LANG_PICKER_CSS)?;

    if head_path.exists() {
        std::fs::copy(&head_path, &head_backup)?;
        let mut file = OpenOptions::new().append(true).open(&head_path)?;
        file.write(head_hbs.as_bytes())?;
    } else {
        std::fs::write(&head_path, head_hbs)?;
    }

    let js_file: toml::Value = "theme/language-picker.js".into();
    let css_file: toml::Value = "theme/language-picker.css".into();
    let po_path: toml::Value = po_path.to_string_lossy().into_owned().into();

    if let Some(additional_css) = mdbook.config.get_mut("output.html.additional-css") {
        additional_css.as_array_mut().unwrap().push(css_file.into());
    } else {
        mdbook
            .config
            .set("output.html.additional-css", vec![css_file])?;
    }
    if let Some(additional_js) = mdbook.config.get_mut("output.html.additional-js") {
        additional_js.as_array_mut().unwrap().push(js_file.into());
    } else {
        mdbook
            .config
            .set("output.html.additional-js", vec![js_file])?;
    }
    mdbook.config.set("preprocessor.gettext.po-dir", po_path)?;
    if serve.is_some() {
        mdbook
            .config
            .set("output.html.live-reload-endpoint", LIVE_RELOAD_ENDPOINT)
            .expect("live-reload-endpoint update failed");
        mdbook.config.set("output.html.site-url", "/").unwrap();
    }

    if let Some(lang_id) = serve {
        let gettext = Gettext;
        mdbook.with_preprocessor(gettext);
        mdbook.config.build.build_dir = dst_path.join(lang_id);
        mdbook.config.set("book.language", lang_id)?;

        info!("build {name} for {lang_id}");
        mdbook.build()?;
    } else {
        info!("build {name}");
        mdbook.build()?;

        let gettext = Gettext;
        mdbook.with_preprocessor(gettext);
        for lang in &book.translations {
            mdbook.config.build.build_dir = dst_path.join(&lang.id);
            mdbook.config.set("book.language", &lang.id)?;

            info!("build {name} for {}", lang.id);
            mdbook.build()?;
        }
    }

    std::fs::remove_file(&js_path)?;
    std::fs::remove_file(&css_path)?;

    if head_backup.exists() {
        std::fs::copy(&head_backup, &head_path)?;
        std::fs::remove_file(&head_backup)?;
    } else {
        std::fs::remove_file(&head_path)?;
    }

    Ok(())
}

const LANG_PICKER_JS: &str = r#"
const right_buttons = document.getElementsByClassName('right-buttons')[0];
const language_toggle = `
<button id="language-toggle" class="icon-button" type="button"
        title="Change language" aria-label="Change language"
        aria-haspopup="true" aria-expanded="false"
        aria-controls="language-list">
    <i class="fa fa-globe"></i>
</button>
<ul id="language-list" class="theme-popup" aria-label="Languages" role="menu">
  <li role="none"><button role="menuitem" class="theme">
      <a id="en">English</a>
  </button></li>
  {% for lang in langs %}
  <li role="none"><button role="menuitem" class="theme">
      <a id="{{ lang.id }}">{{ lang.name }}</a>
  </button></li>
  {% endfor %}
</ul>
`;
right_buttons.insertAdjacentHTML('afterbegin', language_toggle);

let langToggle = document.getElementById("language-toggle");
let langList = document.getElementById("language-list");
langToggle.addEventListener("click", (event) => {
    langList.style.display = langList.style.display == "block" ? "none" : "block";
});
let lang = document.documentElement.lang;
let selectedLang = document.getElementById(lang);
if (selectedLang) {
    selectedLang.parentNode.classList.add("theme-selected");
}

// The path to the root, taking the current
// language into account.
var full_path_to_root;
if (lang == "en") {
    full_path_to_root = `${path_to_root}`;
} else {
    full_path_to_root = `${path_to_root}../`;
}
let components = (path_to_root.match(/\//g) ?? []).length + 1;
let path = window.location.pathname.split('/').slice(-components).join('/');
for (let lang of langList.querySelectorAll("a")) {
    if (lang.id == "en") {
        lang.href = `${full_path_to_root}${path}`;
    } else {
        lang.href = `${full_path_to_root}${lang.id}/${path}`;
    }
}
"#;

const LANG_PICKER_CSS: &str = r#"
#language-list {
  left: auto;
  right: 10px;
}

[dir="rtl"] #language-list {
  left: 10px;
  right: auto;
}

#language-list a {
  color: inherit;
}
"#;

const HEAD_HBS: &str = r#"
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L455DH98TK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L455DH98TK');
</script>

{% raw %}
<script>
    (function () {
        // See these pages for details:
        // https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
        // https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

        function gen_canonical_href(lang) {
{% endraw %}
            let base = "https://rust-lang-translations.org/{{ name }}";
{% raw %}
            let canonical_href;
            if (lang == "en") {
                canonical_href = `${base}/{{ path }}`;
            } else {
                canonical_href = `${base}/${lang}/{{ path }}`;
            }
            canonical_href = canonical_href.slice(0, -"md".length) + "html";
            if (canonical_href.endsWith("/index.html")) {
                canonical_href = canonical_href.slice(0, -"index.html".length);
            }
            return canonical_href;
        }

        {{#if (eq language "en")}}
        const canonical_href = gen_canonical_href("en");
        {{else}}
        const canonical_href = gen_canonical_href("{{ language }}");
        {{/if}}

        let link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonical_href;
        document.head.appendChild(link);

{% endraw %}
        const langs = ["en" {% for lang in langs %} , "{{ lang.id }}" {% endfor %}];
{% raw %}
        for (const lang of langs) {
            const canonical_href = gen_canonical_href(lang);

            let link = document.createElement("link");
            link.rel = "alternate";
            link.hreflang = lang;
            link.href = canonical_href;
            document.head.appendChild(link);
        }
    })()
</script>
{% endraw %}
"#;
