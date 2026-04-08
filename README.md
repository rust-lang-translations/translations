# rust-lang-translations

This is an unofficial document translation project for Rust.

## For users

The website is here:

https://rust-lang-translations.org

## For translators

If you want to add a new translation or update the existing translations.
Please follow the following instruction.

To avoid duplicated works, we recommend to open an [issue](https://github.com/rust-lang-translations/translations/issues) before starting your work.

There are two way to manage translations.

* Use Web UI
* Edit locally

### Use Web UI

[POEditor](https://poeditor.com) can be used.
If you want it, please request through [issue](https://github.com/rust-lang-translations/translations/issues).

### Edit locally

#### Requirement

The following commands are required:

* Rust: `cargo`, `rustup`
* Git: `git`
* GNU gettext: `msginit` `msgmerge`

#### Add a new translation

First of all, create a file and entry for a new translation like below:

```
$ cargo run --release -- add [book name] [language ID] [language name]
```

`[book name]` is a entry name in `translations.toml`,
`[language ID]` is one of [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language codes,
and `[language name]` is a display name in the website.

For example, adding a Japanese for `reference` is like below:

```
$ cargo run --release -- add reference ja "日本語"
```

After it, a translation DB will be created at `translations/[book name]/[language ID].po`.
In the DB, `msgid` is the original English text, and `msgstr` is the corresponding translated text.
You can add translations to the `msgstr` entries.

#### Import an existing translation

If a translation of a book already exists as a set of translated markdown files
(mirroring the original book's `src/` layout), you can bulk-import it into the
`.po` file instead of translating from scratch:

```
$ cargo run --release -- import [book name] [language ID] [translated src dir] \
    [--en-src <english src dir>] [--fuzzy] [--overwrite]
```

You must run `add` first so that the target `.po` file exists. The command
walks each chapter of the original book, runs the same paragraph extractor on
both the English source and the translated markdown at the matching relative
path, and pairs them in order to fill the corresponding `msgstr` entries.
Already-translated entries are preserved unless `--overwrite` is given.

For files whose paragraph counts differ between the English source and the
translation, the importer falls back to **partial alignment**: paragraphs that
share the exact same set of inline `` `code` `` spans are paired heuristically.
This recovers a large fraction of code-heavy mismatched files.

For example, importing an existing translation of `book` whose translated
markdown lives under `/path/to/translated-book/src`:

```
$ cargo run --release -- add book xx "Language Name"
$ cargo run --release -- import book xx /path/to/translated-book/src
```

##### `--en-src`: align against the English the translation was based on

When the existing translation was made against an older version of the
upstream English source, paragraph counts in the *current* upstream will
diverge significantly from the translation, leaving most files mismatched.
In that case you can pass the historical English source via `--en-src`:

```
$ cargo run --release -- import [book name] [language ID] /path/to/translated-book/src \
    --en-src /path/to/upstream-book-at-base-commit/src --overwrite
```

The importer then walks the `--en-src` directory (instead of the current
upstream), pairs each English file with the same-relative-path file under
the translated `src/`, extracts `(old_en_msgid, ja_msgstr)` pairs, and applies
that map to the current `.po`. Only msgids that survive into the current
upstream get filled — anything that has been edited or removed upstream is
left untranslated. This typically works much better than aligning against the
current English when the translation lags behind upstream.

##### `--fuzzy`: similarity-based fuzzy matches

Use `--fuzzy` to also import non-exact matches as `fuzzy` entries. After the
exact-match pass, the importer builds a word-trigram inverted index over the
remaining untranslated msgids in the `.po` and assigns each unused English
key to the most similar msgid (Jaccard similarity). The default similarity
threshold is `0.7` and can be adjusted with `--fuzzy-threshold <value>`.

Fuzzy matches are only useful in combination with `--en-src` (otherwise the
extracted English already matches the current `.po` exactly and there are no
unused keys to fuzzy-match). Fuzzy matches never overwrite already-translated
entries, even with `--overwrite`. Imported fuzzy entries should be reviewed
manually before removing the `fuzzy` flag.

#### Update the existing translation

Even if once the translation is completed, it becomes outdated by the update of the original documents. 
So you can update the translation DB like below:

```
$ cargo run --release -- update [book name] [language ID]
```

By this command, newly added texts are inserted to the DB, and modified texts are marked by `fuzzy`.
The text marked by `fuzzy` are ignored at the next build, so please remove the `fuzzy` string after completing to modify translations.

#### Serve

The following command provides a Web server to check the translated website.
If you update the translation DB, the website is automatically reloaded.

```
$ cargo run --release -- serve [book name] [language ID]
```

#### Build

After editing the DB, you can check the whole rendered website by the following command:

```
$ cargo run --release -- build
```

## License

Licensed under either of

 * Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
