use crate::serve::LIVE_RELOAD_ENDPOINT;
use crate::translations::Book;
use anyhow::Result;
use log::info;
use mdbook_driver::MDBook;
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

    if let Some(additional_css) = mdbook
        .config
        .get::<toml::Value>("output.html.additional-css")?
    {
        let mut additional_css = additional_css.clone();
        additional_css.as_array_mut().unwrap().push(css_file.into());
        mdbook
            .config
            .set("output.html.additional-css", additional_css)?;
    } else {
        mdbook
            .config
            .set("output.html.additional-css", vec![css_file])?;
    }
    if let Some(additional_js) = mdbook
        .config
        .get::<toml::Value>("output.html.additional-js")?
    {
        let mut additional_js = additional_js.clone();
        additional_js.as_array_mut().unwrap().push(js_file.into());
        mdbook
            .config
            .set("output.html.additional-js", additional_js)?;
    } else {
        mdbook
            .config
            .set("output.html.additional-js", vec![js_file])?;
    }
    mdbook.config.set("preprocessor.gettext.po-dir", po_path)?;
    mdbook.config.set(
        "output.html.git-repository-url",
        "https://github.com/rust-lang-translations/project",
    )?;
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
    <span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg></span>
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
