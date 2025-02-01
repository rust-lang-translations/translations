mod translations;

use crate::translations::Translations;
use anyhow::Result;
use clap::{Args, Parser, Subcommand};

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
#[command(propagate_version = true)]
pub struct Opt {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    Build(OptBuild),
    Add(OptAdd),
    Update(OptUpdate),
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

fn main() -> Result<()> {
    let opt = Opt::parse();

    let mut trans = Translations::load()?;

    match opt.command {
        Commands::Build(_) => trans.build()?,
        Commands::Add(x) => trans.add(&x.book, &x.lang_id, &x.lang_name)?,
        Commands::Update(x) => trans.update(&x.book, &x.lang_id)?,
    }

    Ok(())
}
