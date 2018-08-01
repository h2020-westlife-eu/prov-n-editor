ace.define('ace/mode/provn',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(require, exports, module) {
  var oop = require("ace/lib/oop");
  var TextMode = require("ace/mode/text").Mode;
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var MyHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
      "keyword.control": "document|endDocument|bundle|endBundle",
      "keyword.operator": "",//"used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|agent|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember",
      "keyword.other": "",
      "storage.type": "used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember|wasGeneratedBy|wasAssociatedWith",
      "storage.modifier": "entity|activity|agent",
      "support.function": "",
      "constant.language": "prefix"
    }, "identifier");
    this.$rules = {
      "start": [
        { token : "comment", regex : "//" },
        { token : "string",  regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
        { token : "constant.numeric", regex : "0[xX][0-9a-fA-F]+\\b" },
        { token : "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" },
        { token : "keyword.operator", regex : "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|" },
        { token : "punctuation.operator", regex : "\\?|\\:|\\,|\\;|\\." },
        { token : "paren.lparen", regex : "[[({]" },
        { token : "paren.rparen", regex : "[\\])}]" },
        { token : "text", regex : "\\s+" },
        { token: keywordMapper, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }
      ]
    };
  };

  oop.inherits(MyHighlightRules, TextHighlightRules);

  var ProvnMode = function() {
    this.HighlightRules = MyHighlightRules;
  };
  oop.inherits(ProvnMode, TextMode);

  (function() {

    this.$id = "ace/mode/prov-n-mode";

    var WorkerClient = require("ace/worker/worker_client").WorkerClient;
    this.createWorker = function(session) {
      this.$worker = new WorkerClient(["ace"], "ace/worker/provn", "ProvnWorker", "prov-n-worker.js");
      this.$worker.attachToDocument(session.getDocument());

      this.$worker.on("errors", function(e) {
        session.setAnnotations(e.data);
      });

      this.$worker.on("annotate", function(e) {
        session.setAnnotations(e.data);
      });

      this.$worker.on("terminate", function() {
        session.clearAnnotations();
      });

      return this.$worker;

    };

  }).call(ProvnMode.prototype);

  exports.Mode = ProvnMode;
});
