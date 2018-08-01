ace.define('ace/mode/provn',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(acequire, exports, module) {
  var oop = acequire("ace/lib/oop");
  var TextMode = acequire("ace/mode/text").Mode;
  var TextHighlightRules = acequire("ace/mode/text_highlight_rules").TextHighlightRules;

  var MyHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
      "keyword.control": "document|endDocument|bundle|endBundle",
      "keyword.operator": "",//"used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|agent|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember",
      "keyword.other": "",
      "storage.type": "used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|agent|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember|wasGeneratedBy|wasAssociatedWith",
      "storage.modifier": "entity|activity",
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

  var MyMode = function() {
    this.HighlightRules = MyHighlightRules;
  };
  oop.inherits(MyMode, TextMode);

  (function() {

    this.$id = "ace/mode/provn";

    console.log("loading worker");

    var WorkerClient = acequire("ace/worker/worker_client").WorkerClient;
    this.createWorker = function(session) {
      console.log("loading worker2");
      var worker = new WorkerClient(["ace"], require("../worker/provn"), "ProvnWorker");
      console.log("loading worker3",worker);
      worker.attachToDocument(session.getDocument());

      worker.on("errors", function(e) {
        session.setAnnotations(e.data);
      });

      worker.on("annotate", function(e) {
        session.setAnnotations(e.data);
      });

      worker.on("terminate", function() {
        session.clearAnnotations();
      });
      return worker;
    };

  }).call(MyMode.prototype);

  exports.Mode = MyMode;
});
