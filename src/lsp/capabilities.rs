use lsp_types::*;

pub(crate) fn capabilities() -> ServerCapabilities {
    let document_symbol_provider = Some(true);

    let text_document_sync = Some(TextDocumentSyncCapability::Options(TextDocumentSyncOptions {
        open_close: Some(true),
        change: Some(TextDocumentSyncKind::Full),
        ..TextDocumentSyncOptions::default()
    }));

    ServerCapabilities {
        document_symbol_provider,
        text_document_sync,
        ..ServerCapabilities::default()
    }
}