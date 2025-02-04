# rust-lang-translations

This is an unofficial document translation project for Rust.

## For users

The website is here:

https://rust-lang-translations.org

## For translators

If you want to add a new translation or update the existing translations.
Please follow the following instruction.

### Requirement

The following commands are required:

* Rust: `cargo`, `rustup`
* Git: `git`
* GNU gettext: `msginit` `msgmerge`

Now some documents requires beta version of Rust, so we recommend to override by beta like below:
After releasing Rust 1.85, this workaround becomes to be unnecessary.

```
$ rustup override set beta
```

### Add a new translation

First of all, create a file and entry for a new translation like below:

```
$ cargo run --release -- add [book name] [language ID] [language name]
```

`[book name]` is a directory name of the book in `repos`,
`[language ID]` is one of [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language codes,
and `[language name]` is a display name in the website.

For example, adding a Japanese for `reference` is like below:

```
$ cargo run --release -- add reference ja "日本語"
```

After it, a translation DB will be created at `translations/[book name]/[language ID].po`.
In the DB, `msgid` is the original English text, and `msgstr` is the corresponding translated text.
You can add translations to the `msgstr` entries.

### Update the existing translation

Even if once the translation is completed, it becomes outdated by the update of the original documents. 
So you can update the translation DB like below:

```
$ cargo run --release -- update [book name] [language ID]
```

After it, newly added texts are inserted to the DB, and modified texts are marked by `fuzzy`.

### Serve

The following command provides a Web server to check the translated website.
If you update the translation DB, the website is automatically reloaded.

```
$ cargo run --release -- serve [book name] [language ID]
```

### Build

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
