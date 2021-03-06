//! Collects diagnostics for documents with syntax and validation errors.

/// Functions related to processing parse tree events for a document.
pub(crate) mod tree {
    use crate::core::{
        error::{Error, Fallible},
        session::Session,
    };
    use std::sync::Arc;
    use tower_lsp::{lsp_types::*, Client};
    use tree_sitter;

    /// Handle a parse tree "change" event.
    pub(crate) async fn change(session: Arc<Session>, client: &Client, uri: Url) -> Fallible<()> {
        if let Some(document) = session.get_document(&uri).await? {
            let tree = document.tree.lock().await.clone();
            let node = tree.root_node();
            let mut diagnostics = vec![];
            if node.has_error() {
                // prepare a query to match tree-sitter ERROR nodes
                let language = tree.language();
                let source = "((ERROR) @error)"; // query the tree for ERROR nodes
                let query = tree_sitter::Query::new(language, source).map_err(Error::TreeSitterQueryError)?;

                // prepare a query cursor
                let mut query_cursor = tree_sitter::QueryCursor::new();
                let text_callback = |node: tree_sitter::Node| &document.text[node.byte_range()];
                let matches = query_cursor.matches(&query, node, text_callback);

                // iterate the query cursor and construct appropriate lsp diagnostics
                for tree_sitter::QueryMatch { captures, .. } in matches {
                    for tree_sitter::QueryCapture { node, .. } in captures {
                        let start = node.start_position();
                        let end = node.end_position();
                        diagnostics.push({
                            let range = {
                                let start = Position::new(start.row as u64, start.column as u64);
                                let end = Position::new(end.row as u64, end.column as u64);
                                Range::new(start, end)
                            };
                            let severity = Some(DiagnosticSeverity::Error);
                            let code = None;
                            let source = Some(String::from("wasm-lsp"));
                            let message = String::from("syntax error");
                            let related_information = None;
                            let tags = None;
                            Diagnostic::new(range, severity, code, source, message, related_information, tags)
                        });
                    }
                }
            }
            // NOTE: else let elaborator handle
            let version = None;
            client.publish_diagnostics(uri.clone(), diagnostics, version);
        }
        Ok(())
    }

    /// Handle a parse tree "close" event.
    pub(crate) async fn close(_: Arc<Session>, client: &Client, uri: Url) -> Fallible<()> {
        // clear diagnostics on tree close
        // FIXME: handle this properly
        let diagnostics = vec![];
        let version = None;
        client.publish_diagnostics(uri, diagnostics, version);
        Ok(())
    }

    /// Handle a parse tree "open" event.
    pub(crate) async fn open(session: Arc<Session>, client: &Client, uri: Url) -> Fallible<()> {
        self::change(session, client, uri).await
    }
}
