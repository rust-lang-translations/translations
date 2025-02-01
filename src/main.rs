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
    /// Language ID
    lang: String,
}

/// Update the translation
#[derive(Args)]
pub struct OptUpdate {
    /// Book name
    book: String,
    /// Language ID
    lang: String,
}

fn main() -> Result<()> {
    let opt = Opt::parse();

    let trans = Translations::load()?;

    match opt.command {
        Commands::Build(_) => trans.build()?,
        Commands::Add(x) => trans.add(&x.book, &x.lang)?,
        Commands::Update(x) => trans.update(&x.book, &x.lang)?,
    }

    Ok(())
}
