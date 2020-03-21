var searchIndex={};
searchIndex["webassembly_language_server"] = {"doc":"","i":[[5,"main","webassembly_language_server","",null,[[],["fallible",6]]],[0,"analyzer","","",null,null],[3,"Analyzer","webassembly_language_server::analyzer","Computes queries from elaborated syntax and metadata in…",null,null],[12,"database","","",0,null],[12,"rx","","",0,null],[12,"synchronizer","","",0,null],[11,"new","","",0,[[["synchronizer",3],["arc",3],["receiver",3],["message",4],["arc",3],["database",3]],["fallible",6]]],[11,"init","","",0,[[]]],[0,"auditor","webassembly_language_server","",null,null],[3,"Auditor","webassembly_language_server::auditor","",null,null],[12,"rx","","",1,null],[12,"synchronizer","","",1,null],[11,"new","","",1,[[["synchronizer",3],["receiver",3],["message",4],["arc",3]],["fallible",6]]],[11,"init","","",1,[[]]],[0,"database","webassembly_language_server","",null,null],[3,"Database","webassembly_language_server::database","Caches elaborated syntax and metadata about WebAssembly…",null,null],[12,"sled","","",2,null],[12,"uuid","","",2,null],[11,"new","","",2,[[],["fallible",6]]],[11,"handle","","",2,[[["uuid",3]],[["path",3],["box",3]]]],[0,"elaborator","webassembly_language_server","",null,null],[3,"Elaborator","webassembly_language_server::elaborator","Elaborates a given [`Tree`] into structured data to be…",null,null],[12,"database","","",3,null],[12,"rx","","",3,null],[12,"synchronizer","","",3,null],[11,"new","","",3,[[["synchronizer",3],["arc",3],["receiver",3],["message",4],["arc",3],["database",3]],["fallible",6]]],[11,"init","","",3,[[]]],[0,"error","webassembly_language_server","",null,null],[4,"Error","webassembly_language_server::error","",null,null],[13,"LanguageError","","",4,null],[0,"highlighter","webassembly_language_server","",null,null],[3,"Highlighter","webassembly_language_server::highlighter","Computes highlights from elaborated syntax and metadata in…",null,null],[12,"rx","","",5,null],[12,"synchronizer","","",5,null],[11,"new","","",5,[[["synchronizer",3],["receiver",3],["message",4],["arc",3]],["fallible",6]]],[11,"init","","",5,[[]]],[0,"message","webassembly_language_server","",null,null],[4,"Message","webassembly_language_server::message","",null,null],[13,"DidOpenTree","","",6,null],[12,"uri","webassembly_language_server::message::Message","",7,null],[13,"DidChangeTree","webassembly_language_server::message","",6,null],[12,"uri","webassembly_language_server::message::Message","",8,null],[13,"DidCloseTree","webassembly_language_server::message","",6,null],[12,"uri","webassembly_language_server::message::Message","",9,null],[13,"Start","webassembly_language_server::message","",6,null],[0,"parser","webassembly_language_server","",null,null],[3,"Parser","webassembly_language_server::parser","Owns tree-sitter [`Parser`] instances for supported…",null,null],[12,"wast","","",10,null],[12,"wat","","",10,null],[12,"wit","","",10,null],[12,"witx","","",10,null],[11,"wast","","",10,[[],[["parser",3],["fallible",6]]]],[11,"wat","","",10,[[],[["parser",3],["fallible",6]]]],[11,"wit","","",10,[[],[["parser",3],["fallible",6]]]],[11,"witx","","",10,[[],[["parser",3],["fallible",6]]]],[11,"new","","",10,[[],["fallible",6]]],[0,"server","webassembly_language_server","",null,null],[0,"session","","",null,null],[3,"Session","webassembly_language_server::session","Represents the current state of the LSP service.",null,null],[12,"synchronizer","","",11,null],[11,"new","","",11,[[["arc",3],["synchronizer",3]],["fallible",6]]],[0,"synchronizer","webassembly_language_server","",null,null],[3,"Synchronizer","webassembly_language_server::synchronizer","Parses a given document into a [`Tree`] with [`Parser`].…",null,null],[12,"parser","","",12,null],[12,"tx","","",12,null],[12,"rx","","",12,null],[12,"trees","","",12,null],[11,"new","","",12,[[["arc",3],["parser",3]],["fallible",6]]],[11,"did_open","","",12,[[["client",3],["didopentextdocumentparams",3]]]],[11,"did_change","","",12,[[["client",3],["didchangetextdocumentparams",3]]]],[11,"did_close","","",12,[[["client",3],["didclosetextdocumentparams",3]]]],[11,"from","webassembly_language_server::analyzer","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","webassembly_language_server::auditor","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","webassembly_language_server::database","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","webassembly_language_server::elaborator","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","webassembly_language_server::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"as_fail","","",4,[[],["fail",8]]],[11,"vzip","","",4,[[]]],[11,"from","webassembly_language_server::highlighter","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","webassembly_language_server::message","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","webassembly_language_server::parser","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","webassembly_language_server::session","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","webassembly_language_server::synchronizer","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"clone","webassembly_language_server::message","",6,[[],["message",4]]],[11,"fmt","webassembly_language_server::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","webassembly_language_server::message","",6,[[["formatter",3]],["result",6]]],[11,"fmt","webassembly_language_server::error","",4,[[["formatter",3]],["result",6]]],[11,"name","","",4,[[],["option",4]]],[11,"cause","","",4,[[],[["fail",8],["option",4]]]],[11,"backtrace","","",4,[[],[["option",4],["backtrace",3]]]],[11,"initialize","webassembly_language_server::session","",11,[[["initializeparams",3],["client",3]],[["result",6],["initializeresult",3]]]],[11,"initialized","","",11,[[["client",3],["initializedparams",3]],[["box",3],["pin",3]]]],[11,"shutdown","","",11,[[],[["box",3],["pin",3]]]],[11,"did_open","","",11,[[["client",3],["didopentextdocumentparams",3]],[["box",3],["pin",3]]]],[11,"did_change","","",11,[[["client",3],["didchangetextdocumentparams",3]],[["box",3],["pin",3]]]],[11,"did_close","","",11,[[["client",3],["didclosetextdocumentparams",3]],[["box",3],["pin",3]]]]],"p":[[3,"Analyzer"],[3,"Auditor"],[3,"Database"],[3,"Elaborator"],[4,"Error"],[3,"Highlighter"],[4,"Message"],[13,"DidOpenTree"],[13,"DidChangeTree"],[13,"DidCloseTree"],[3,"Parser"],[3,"Session"],[3,"Synchronizer"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);