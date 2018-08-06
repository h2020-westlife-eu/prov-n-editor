ace.define('ace/mode/provn',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(require, exports, module) {
  var oop = require("ace/lib/oop");
  var TextMode = require("ace/mode/text").Mode;
  var  o = require("./provn_highlight_rules").provnHighlightRules
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var MyHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
      "keyword.control": "document|endDocument|bundle|endBundle",
      "keyword.operator": "",//"used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|agent|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember",
      "keyword.other": "",
      "storage.type": "used|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasInformedBy|wasAsociatedWith|wasAttributedTo|actedOnBehalfOf|wasDerivedFrom|wasInfluencedBy|alternateOf|specializationOf|hadMember|wasGeneratedBy|wasAssociatedWith",
      "storage.modifier": "entity|activity|agent",
      "support.function": "",
      "constant.language": "prefix|default"
    }, "identifier");
    this.$rules = {
      "start": [
        { token : "comment", regex : "//" },
        { token : "string",  regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
        { token : "constant.numeric", regex : "0[xX][0-9a-fA-F]+\\b" },
        { token : "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" },
        { token : "constant.numeric", regex: "<[^>]?>" },
        { token : "keyword.operator", regex : "=|%%" },
        { token : "punctuation.operator", regex : "\\?|\\:|\\,|\\;|\\." },
        { token : "paren.lparen", regex : "[[({<]" },
        { token : "paren.rparen", regex : "[\\])}>]" },
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
}),
    ace.define("ace/mode/provn_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (e, t, n) {
        var r = e("../lib/oop"), i = e("./text_highlight_rules").TextHighlightRules, s = function () {
            var e = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])?T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+\-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?/,
                t = "\\w[\\w-]*", n = "[\\w][-/%\\.\\w]*[-/%#\\w]*", r = '[^<>"{}|^`\\\\]*',
                i = "entity|activity|agent|wasGeneratedBy|used|wasInformedBy|wasStartedBy|wasEndedBy|wasInvalidatedBy|wasDerivedFrom|wasAttributedTo|wasAssociatedWith|actedOnBehalfOf|wasInfluencedBy|alternateOf|specializationOf|hadMember|mentionOf",
                s = {token: "comment.line.double-slash", regex: /\/\//, push: "line_comment"},
                o = {token: "comment.block", regex: /\/\*/, push: "block_comment"}, u = "(" + t + ")(:)(" + n + ")",
                a = {token: ["storage.type", "punctuation.operator", "entity.localname.variable.provn"], regex: u},
                f = {token: "entity.localname.variable.provn", regex: "(" + n + ")"},
                l = {token: "text.space", regex: /^[ \t]/}, c = {token: "invalid.illegal", regex: /\S+/}, h = {
                    token: ["keyword.other.prefix.provn", "text", "storage.type.prefix.provn", "text", "paren.lparen", "markup.underline.link", "paren.rparen"],
                    regex: "(prefix)([ \\t]+)(" + t + ")([ \\t]+)(<)(" + r + ")(>)"
                }, p = {
                    token: ["keyword.other.prefix.provn", "text", "paren.lparen", "markup.underline.link", "paren.rparen"],
                    regex: "(default)([ \\t]+)(<)(" + r + ")(>)"
                }, d = {
                    token: ["keyword.statement.provn", "text", "paren.lparen"],
                    regex: "\\b(" + i + ")([ \\t]*)(\\()",
                    push: "statement"
                }, v = {
                    token: ["keyword.control.bundle.provn", "text", "storage.type", "punctuation.operator", "entity.localname.variable.provn"],
                    regex: "(bundle)([ \\t]*)" + u,
                    next: "bundle_content"
                };
            this.$rules = {
                start: [{
                    token: "keyword.control.document.provn",
                    regex: "document",
                    next: "doc_content"
                }, s, o, l, c],
                end: [s, o, l, c],
                doc_content: [{
                    token: "keyword.control.document.provn",
                    regex: "endDocument",
                    next: "end"
                }, s, o, h, p, d, v],
                doc_content_bundle_only: [{
                    token: "keyword.control.document.provn",
                    regex: "endDocument",
                    next: "end"
                }, s, o, v, l, c],
                bundle_content: [{
                    token: "keyword.control.bundle.provn",
                    regex: "endBundle",
                    next: "doc_content_bundle_only"
                }, s, o, h, p, d],
                statement: [{token: "constant.other.datetime", regex: e}, a, f, s, o, {
                    token: "keyword.operator",
                    regex: "-"
                }, {token: "punctuation.separator", regex: ","}, {
                    token: "paren.lparen.square",
                    regex: /\[/,
                    push: "attribute_block"
                }, {token: "paren.rparen", regex: /\)/, next: "pop"}],
                attribute_block: [s, o, {
                    token: ["storage.type", "punctuation.operator", "entity.localname.variable.provn", "text", "keyword.operator"],
                    regex: "(" + t + ")(:)(" + n + ")([ \\t]*)(=)",
                    push: "attribute_value"
                }, {token: "punctuation.separator", regex: ","}, {token: "paren.rparen.square", regex: /\]/, next: "pop"}],
                attribute_value: [s, o, {
                    token: ["punctuation", "storage.type", "punctuation.operator", "entity.localname.variable.provn", "punctuation"],
                    regex: "(')" + u + "(')",
                    next: "pop"
                }, {
                    token: ["punctuation", "entity.localname.variable.provn", "punctuation"],
                    regex: "(')(" + n + ")(')",
                    next: "pop"
                }, {
                    token: ["string", "text", "keyword.operator", "text", "storage.type", "punctuation.operator", "entity.localname.variable.provn"],
                    regex: '(["](?:(?:\\\\.)|(?:[^"\\\\]))*?["])(\\s*)(%%)(\\s*)' + u,
                    next: "pop"
                }, {token: "string", regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]', next: "pop"}, {
                    token: "constant.numeric",
                    regex: /[-]?\d+/,
                    next: "pop"
                }, {token: "punctuation.separator", regex: ",", next: "pop"}, l, {
                    token: "invalid.illegal",
                    regex: /[^,\]\s]+/,
                    next: "pop"
                }],
                line_comment: [{
                    token: "comment.line.double-slash",
                    regex: /$|^/,
                    next: "pop"
                }, {defaultToken: "comment.line.double-slash"}],
                block_comment: [{token: "comment.block", regex: /\*\//, next: "pop"}, {defaultToken: "comment.block"}]
            }, this.normalizeRules()
        };
        r.inherits(s, i), t.provnHighlightRules = s
    });
