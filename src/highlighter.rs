use crate::synchronizer::Synchronizer;
use failure::Fallible;
use std::sync::Arc;

// TODO: implement highlight adapter from tree-sitter to LSP SemanticTokenType

/// Computes highlights from elaborated syntax and metadata in
/// [`Database`](crate::database::Database).
pub struct Highlighter {
    synchronizer: Arc<Synchronizer>,
}

impl Highlighter {
    pub fn new(synchronizer: Arc<Synchronizer>) -> Fallible<Self> {
        Ok(Highlighter { synchronizer })
    }
}