module.exports.id='ace/worker/provn';
module.exports.src='"no use strict";\n' +
  '(function(e) {\n' +
  '  if (typeof e.window != "undefined" && e.document) return;\n' +
  '  e.console = function() {\n' +
  '    var e = Array.prototype.slice.call(arguments, 0);\n' +
  '    postMessage({\n' +
  '      type: "log",\n' +
  '      data: e\n' +
  '    })\n' +
  '  }, e.console.error = e.console.warn = e.console.log = e.console.trace = e.console, e.window = e, e.ace = e, e.onerror = function(e, t, n, r, i) {\n' +
  '    postMessage({\n' +
  '      type: "error",\n' +
  '      data: {\n' +
  '        message: e,\n' +
  '        file: t,\n' +
  '        line: n,\n' +
  '        col: r,\n' +
  '        stack: i.stack\n' +
  '      }\n' +
  '    })\n' +
  '  }, e.normalizeModule = function(t, n) {\n' +
  '    if (n.indexOf("!") !== -1) {\n' +
  '      var r = n.split("!");\n' +
  '      return e.normalizeModule(t, r[0]) + "!" + e.normalizeModule(t, r[1])\n' +
  '    }\n' +
  '    if (n.charAt(0) == ".") {\n' +
  '      var i = t.split("/")\n' +
  '        .slice(0, -1)\n' +
  '        .join("/");\n' +
  '      n = (i ? i + "/" : "") + n;\n' +
  '      while (n.indexOf(".") !== -1 && s != n) {\n' +
  '        var s = n;\n' +
  '        n = n.replace(/^\\.\\//, "")\n' +
  '          .replace(/\\/\\.\\//, "/")\n' +
  '          .replace(/[^\\/]+\\/\\.\\.\\//, "")\n' +
  '      }\n' +
  '    }\n' +
  '    return n\n' +
  '  }, e.require = function(t, n) {\n' +
  '    n || (n = t, t = null);\n' +
  '    if (!n.charAt) throw new Error("worker.js require() accepts only (parentId, id) as arguments");\n' +
  '    n = e.normalizeModule(t, n);\n' +
  '    var r = e.require.modules[n];\n' +
  '    if (r) return r.initialized || (r.initialized = !0, r.exports = r.factory()\n' +
  '      .exports), r.exports;\n' +
  '    var i = n.split("/");\n' +
  '    if (!e.require.tlns) return console.log("unable to load " + n);\n' +
  '    i[0] = e.require.tlns[i[0]] || i[0];\n' +
  '    var s = i.join("/") + ".js";\n' +
  '    return e.require.id = n, importScripts(s), e.require(t, n)\n' +
  '  }, e.require.modules = {}, e.require.tlns = {}, e.define = function(t, n, r) {\n' +
  '    arguments.length == 2 ? (r = n, typeof t != "string" && (n = t, t = e.require.id)) : arguments.length == 1 && (r = t, n = [], t = e.require.id);\n' +
  '    if (typeof r != "function") {\n' +
  '      e.require.modules[t] = {\n' +
  '        exports: r,\n' +
  '        initialized: !0\n' +
  '      };\n' +
  '      return\n' +
  '    }\n' +
  '    n.length || (n = ["require", "exports", "module"]);\n' +
  '    var i = function(n) {\n' +
  '      return e.require(t, n)\n' +
  '    };\n' +
  '    e.require.modules[t] = {\n' +
  '      exports: {},\n' +
  '      factory: function() {\n' +
  '        var e = this,\n' +
  '          t = r.apply(this, n.map(function(t) {\n' +
  '            switch (t) {\n' +
  '              case "require":\n' +
  '                return i;\n' +
  '              case "exports":\n' +
  '                return e.exports;\n' +
  '              case "module":\n' +
  '                return e;\n' +
  '              default:\n' +
  '                return i(t)\n' +
  '            }\n' +
  '          }));\n' +
  '        return t && (e.exports = t), e\n' +
  '      }\n' +
  '    }\n' +
  '  }, e.define.amd = {}, e.initBaseUrls = function(t) {\n' +
  '    require.tlns = t\n' +
  '  }, e.initSender = function() {\n' +
  '    var n = e.require("ace/lib/event_emitter")\n' +
  '        .EventEmitter,\n' +
  '      r = e.require("ace/lib/oop"),\n' +
  '      i = function() {};\n' +
  '    return function() {\n' +
  '      r.implement(this, n), this.callback = function(e, t) {\n' +
  '        postMessage({\n' +
  '          type: "call",\n' +
  '          id: t,\n' +
  '          data: e\n' +
  '        })\n' +
  '      }, this.emit = function(e, t) {\n' +
  '        postMessage({\n' +
  '          type: "event",\n' +
  '          name: e,\n' +
  '          data: t\n' +
  '        })\n' +
  '      }\n' +
  '    }.call(i.prototype), new i\n' +
  '  };\n' +
  '  var t = e.main = null,\n' +
  '    n = e.sender = null;\n' +
  '  e.onmessage = function(r) {\n' +
  '    var i = r.data;\n' +
  '    if (i.command) {\n' +
  '      if (!t[i.command]) throw new Error("Unknown command:" + i.command);\n' +
  '      t[i.command].apply(t, i.args)\n' +
  '    } else if (i.init) {\n' +
  '      initBaseUrls(i.tlns), require("ace/lib/es5-shim"), n = e.sender = initSender();\n' +
  '      var s = require(i.module)[i.classname];\n' +
  '      t = e.main = new s(n)\n' +
  '    } else i.event && n && n._signal(i.event, i.data)\n' +
  '  }\n' +
  '})(this), ace.define("ace/lib/oop", ["require", "exports", "module"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  t.inherits = function(e, t) {\n' +
  '    e.super_ = t, e.prototype = Object.create(t.prototype, {\n' +
  '      constructor: {\n' +
  '        value: e,\n' +
  '        enumerable: !1,\n' +
  '        writable: !0,\n' +
  '        configurable: !0\n' +
  '      }\n' +
  '    })\n' +
  '  }, t.mixin = function(e, t) {\n' +
  '    for (var n in t) e[n] = t[n];\n' +
  '    return e\n' +
  '  }, t.implement = function(e, n) {\n' +
  '    t.mixin(e, n)\n' +
  '  }\n' +
  '}), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  var r = {},\n' +
  '    i = function() {\n' +
  '      this.propagationStopped = !0\n' +
  '    },\n' +
  '    s = function() {\n' +
  '      this.defaultPrevented = !0\n' +
  '    };\n' +
  '  r._emit = r._dispatchEvent = function(e, t) {\n' +
  '    this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});\n' +
  '    var n = this._eventRegistry[e] || [],\n' +
  '      r = this._defaultHandlers[e];\n' +
  '    if (!n.length && !r) return;\n' +
  '    if (typeof t != "object" || !t) t = {};\n' +
  '    t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = i), t.preventDefault || (t.preventDefault = s), n = n.slice();\n' +
  '    for (var o = 0; o < n.length; o++) {\n' +
  '      n[o](t, this);\n' +
  '      if (t.propagationStopped) break\n' +
  '    }\n' +
  '    if (r && !t.defaultPrevented) return r(t, this)\n' +
  '  }, r._signal = function(e, t) {\n' +
  '    var n = (this._eventRegistry || {})[e];\n' +
  '    if (!n) return;\n' +
  '    n = n.slice();\n' +
  '    for (var r = 0; r < n.length; r++) n[r](t, this)\n' +
  '  }, r.once = function(e, t) {\n' +
  '    var n = this;\n' +
  '    t && this.addEventListener(e, function r() {\n' +
  '      n.removeEventListener(e, r), t.apply(null, arguments)\n' +
  '    })\n' +
  '  }, r.setDefaultHandler = function(e, t) {\n' +
  '    var n = this._defaultHandlers;\n' +
  '    n || (n = this._defaultHandlers = {\n' +
  '      _disabled_: {}\n' +
  '    });\n' +
  '    if (n[e]) {\n' +
  '      var r = n[e],\n' +
  '        i = n._disabled_[e];\n' +
  '      i || (n._disabled_[e] = i = []), i.push(r);\n' +
  '      var s = i.indexOf(t);\n' +
  '      s != -1 && i.splice(s, 1)\n' +
  '    }\n' +
  '    n[e] = t\n' +
  '  }, r.removeDefaultHandler = function(e, t) {\n' +
  '    var n = this._defaultHandlers;\n' +
  '    if (!n) return;\n' +
  '    var r = n._disabled_[e];\n' +
  '    if (n[e] == t) {\n' +
  '      var i = n[e];\n' +
  '      r && this.setDefaultHandler(e, r.pop())\n' +
  '    } else if (r) {\n' +
  '      var s = r.indexOf(t);\n' +
  '      s != -1 && r.splice(s, 1)\n' +
  '    }\n' +
  '  }, r.on = r.addEventListener = function(e, t, n) {\n' +
  '    this._eventRegistry = this._eventRegistry || {};\n' +
  '    var r = this._eventRegistry[e];\n' +
  '    return r || (r = this._eventRegistry[e] = []), r.indexOf(t) == -1 && r[n ? "unshift" : "push"](t), t\n' +
  '  }, r.off = r.removeListener = r.removeEventListener = function(e, t) {\n' +
  '    this._eventRegistry = this._eventRegistry || {};\n' +
  '    var n = this._eventRegistry[e];\n' +
  '    if (!n) return;\n' +
  '    var r = n.indexOf(t);\n' +
  '    r !== -1 && n.splice(r, 1)\n' +
  '  }, r.removeAllListeners = function(e) {\n' +
  '    this._eventRegistry && (this._eventRegistry[e] = [])\n' +
  '  }, t.EventEmitter = r\n' +
  '}), ace.define("ace/range", ["require", "exports", "module"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  var r = function(e, t) {\n' +
  '      return e.row - t.row || e.column - t.column\n' +
  '    },\n' +
  '    i = function(e, t, n, r) {\n' +
  '      this.start = {\n' +
  '        row: e,\n' +
  '        column: t\n' +
  '      }, this.end = {\n' +
  '        row: n,\n' +
  '        column: r\n' +
  '      }\n' +
  '    };\n' +
  '  (function() {\n' +
  '    this.isEqual = function(e) {\n' +
  '      return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column\n' +
  '    }, this.toString = function() {\n' +
  '      return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"\n' +
  '    }, this.contains = function(e, t) {\n' +
  '      return this.compare(e, t) == 0\n' +
  '    }, this.compareRange = function(e) {\n' +
  '      var t, n = e.end,\n' +
  '        r = e.start;\n' +
  '      return t = this.compare(n.row, n.column), t == 1 ? (t = this.compare(r.row, r.column), t == 1 ? 2 : t == 0 ? 1 : 0) : t == -1 ? -2 : (t = this.compare(r.row, r.column), t == -1 ? -1 : t == 1 ? 42 : 0)\n' +
  '    }, this.comparePoint = function(e) {\n' +
  '      return this.compare(e.row, e.column)\n' +
  '    }, this.containsRange = function(e) {\n' +
  '      return this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0\n' +
  '    }, this.intersects = function(e) {\n' +
  '      var t = this.compareRange(e);\n' +
  '      return t == -1 || t == 0 || t == 1\n' +
  '    }, this.isEnd = function(e, t) {\n' +
  '      return this.end.row == e && this.end.column == t\n' +
  '    }, this.isStart = function(e, t) {\n' +
  '      return this.start.row == e && this.start.column == t\n' +
  '    }, this.setStart = function(e, t) {\n' +
  '      typeof e == "object" ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)\n' +
  '    }, this.setEnd = function(e, t) {\n' +
  '      typeof e == "object" ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)\n' +
  '    }, this.inside = function(e, t) {\n' +
  '      return this.compare(e, t) == 0 ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1\n' +
  '    }, this.insideStart = function(e, t) {\n' +
  '      return this.compare(e, t) == 0 ? this.isEnd(e, t) ? !1 : !0 : !1\n' +
  '    }, this.insideEnd = function(e, t) {\n' +
  '      return this.compare(e, t) == 0 ? this.isStart(e, t) ? !1 : !0 : !1\n' +
  '    }, this.compare = function(e, t) {\n' +
  '      return !this.isMultiLine() && e === this.start.row ? t < this.start.column ? -1 : t > this.end.column ? 1 : 0 : e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0\n' +
  '    }, this.compareStart = function(e, t) {\n' +
  '      return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)\n' +
  '    }, this.compareEnd = function(e, t) {\n' +
  '      return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)\n' +
  '    }, this.compareInside = function(e, t) {\n' +
  '      return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)\n' +
  '    }, this.clipRows = function(e, t) {\n' +
  '      if (this.end.row > t) var n = {\n' +
  '        row: t + 1,\n' +
  '        column: 0\n' +
  '      };\n' +
  '      else if (this.end.row < e) var n = {\n' +
  '        row: e,\n' +
  '        column: 0\n' +
  '      };\n' +
  '      if (this.start.row > t) var r = {\n' +
  '        row: t + 1,\n' +
  '        column: 0\n' +
  '      };\n' +
  '      else if (this.start.row < e) var r = {\n' +
  '        row: e,\n' +
  '        column: 0\n' +
  '      };\n' +
  '      return i.fromPoints(r || this.start, n || this.end)\n' +
  '    }, this.extend = function(e, t) {\n' +
  '      var n = this.compare(e, t);\n' +
  '      if (n == 0) return this;\n' +
  '      if (n == -1) var r = {\n' +
  '        row: e,\n' +
  '        column: t\n' +
  '      };\n' +
  '      else var s = {\n' +
  '        row: e,\n' +
  '        column: t\n' +
  '      };\n' +
  '      return i.fromPoints(r || this.start, s || this.end)\n' +
  '    }, this.isEmpty = function() {\n' +
  '      return this.start.row === this.end.row && this.start.column === this.end.column\n' +
  '    }, this.isMultiLine = function() {\n' +
  '      return this.start.row !== this.end.row\n' +
  '    }, this.clone = function() {\n' +
  '      return i.fromPoints(this.start, this.end)\n' +
  '    }, this.collapseRows = function() {\n' +
  '      return this.end.column == 0 ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0)\n' +
  '    }, this.toScreenRange = function(e) {\n' +
  '      var t = e.documentToScreenPosition(this.start),\n' +
  '        n = e.documentToScreenPosition(this.end);\n' +
  '      return new i(t.row, t.column, n.row, n.column)\n' +
  '    }, this.moveBy = function(e, t) {\n' +
  '      this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t\n' +
  '    }\n' +
  '  })\n' +
  '    .call(i.prototype), i.fromPoints = function(e, t) {\n' +
  '    return new i(e.row, e.column, t.row, t.column)\n' +
  '  }, i.comparePoints = r, i.comparePoints = function(e, t) {\n' +
  '    return e.row - t.row || e.column - t.column\n' +
  '  }, t.Range = i\n' +
  '}), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  var r = e("./lib/oop"),\n' +
  '    i = e("./lib/event_emitter")\n' +
  '      .EventEmitter,\n' +
  '    s = t.Anchor = function(e, t, n) {\n' +
  '      this.$onChange = this.onChange.bind(this), this.attach(e), typeof n == "undefined" ? this.setPosition(t.row, t.column) : this.setPosition(t, n)\n' +
  '    };\n' +
  '  (function() {\n' +
  '    r.implement(this, i), this.getPosition = function() {\n' +
  '      return this.$clipPositionToDocument(this.row, this.column)\n' +
  '    }, this.getDocument = function() {\n' +
  '      return this.document\n' +
  '    }, this.$insertRight = !1, this.onChange = function(e) {\n' +
  '      var t = e.data,\n' +
  '        n = t.range;\n' +
  '      if (n.start.row == n.end.row && n.start.row != this.row) return;\n' +
  '      if (n.start.row > this.row) return;\n' +
  '      if (n.start.row == this.row && n.start.column > this.column) return;\n' +
  '      var r = this.row,\n' +
  '        i = this.column,\n' +
  '        s = n.start,\n' +
  '        o = n.end;\n' +
  '      if (t.action === "insertText")\n' +
  '        if (s.row === r && s.column <= i) {\n' +
  '          if (s.column !== i || !this.$insertRight) s.row === o.row ? i += o.column - s.column : (i -= s.column, r += o.row - s.row)\n' +
  '        } else s.row !== o.row && s.row < r && (r += o.row - s.row);\n' +
  '      else t.action === "insertLines" ? (s.row !== r || i !== 0 || !this.$insertRight) && s.row <= r && (r += o.row - s.row) : t.action === "removeText" ? s.row === r && s.column < i ? o.column >= i ? i = s.column : i = Math.max(0, i - (o.column - s.column)) : s.row !== o.row && s.row < r ? (o.row === r && (i = Math.max(0, i - o.column) + s.column), r -= o.row - s.row) : o.row === r && (r -= o.row - s.row, i = Math.max(0, i - o.column) + s.column) : t.action == "removeLines" && s.row <= r && (o.row <= r ? r -= o.row - s.row : (r = s.row, i = 0));\n' +
  '      this.setPosition(r, i, !0)\n' +
  '    }, this.setPosition = function(e, t, n) {\n' +
  '      var r;\n' +
  '      n ? r = {\n' +
  '        row: e,\n' +
  '        column: t\n' +
  '      } : r = this.$clipPositionToDocument(e, t);\n' +
  '      if (this.row == r.row && this.column == r.column) return;\n' +
  '      var i = {\n' +
  '        row: this.row,\n' +
  '        column: this.column\n' +
  '      };\n' +
  '      this.row = r.row, this.column = r.column, this._signal("change", {\n' +
  '        old: i,\n' +
  '        value: r\n' +
  '      })\n' +
  '    }, this.detach = function() {\n' +
  '      this.document.removeEventListener("change", this.$onChange)\n' +
  '    }, this.attach = function(e) {\n' +
  '      this.document = e || this.document, this.document.on("change", this.$onChange)\n' +
  '    }, this.$clipPositionToDocument = function(e, t) {\n' +
  '      var n = {};\n' +
  '      return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row)\n' +
  '        .length) : e < 0 ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row)\n' +
  '        .length, Math.max(0, t))), t < 0 && (n.column = 0), n\n' +
  '    }\n' +
  '  })\n' +
  '    .call(s.prototype)\n' +
  '}), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  var r = e("./lib/oop"),\n' +
  '    i = e("./lib/event_emitter")\n' +
  '      .EventEmitter,\n' +
  '    s = e("./range")\n' +
  '      .Range,\n' +
  '    o = e("./anchor")\n' +
  '      .Anchor,\n' +
  '    u = function(e) {\n' +
  '      this.$lines = [], e.length === 0 ? this.$lines = [""] : Array.isArray(e) ? this._insertLines(0, e) : this.insert({\n' +
  '        row: 0,\n' +
  '        column: 0\n' +
  '      }, e)\n' +
  '    };\n' +
  '  (function() {\n' +
  '    r.implement(this, i), this.setValue = function(e) {\n' +
  '      var t = this.getLength();\n' +
  '      this.remove(new s(0, 0, t, this.getLine(t - 1)\n' +
  '        .length)), this.insert({\n' +
  '        row: 0,\n' +
  '        column: 0\n' +
  '      }, e)\n' +
  '    }, this.getValue = function() {\n' +
  '      return this.getAllLines()\n' +
  '        .join(this.getNewLineCharacter())\n' +
  '    }, this.createAnchor = function(e, t) {\n' +
  '      return new o(this, e, t)\n' +
  '    }, "aaa".split(/a/)\n' +
  '      .length === 0 ? this.$split = function(e) {\n' +
  '      return e.replace(/\\r\\n|\\r/g, "\\n")\n' +
  '        .split("\\n")\n' +
  '    } : this.$split = function(e) {\n' +
  '      return e.split(/\\r\\n|\\r|\\n/)\n' +
  '    }, this.$detectNewLine = function(e) {\n' +
  '      var t = e.match(/^.*?(\\r\\n|\\r|\\n)/m);\n' +
  '      this.$autoNewLine = t ? t[1] : "\\n", this._signal("changeNewLineMode")\n' +
  '    }, this.getNewLineCharacter = function() {\n' +
  '      switch (this.$newLineMode) {\n' +
  '        case "windows":\n' +
  '          return "\\r\\n";\n' +
  '        case "unix":\n' +
  '          return "\\n";\n' +
  '        default:\n' +
  '          return this.$autoNewLine || "\\n"\n' +
  '      }\n' +
  '    }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(e) {\n' +
  '      if (this.$newLineMode === e) return;\n' +
  '      this.$newLineMode = e, this._signal("changeNewLineMode")\n' +
  '    }, this.getNewLineMode = function() {\n' +
  '      return this.$newLineMode\n' +
  '    }, this.isNewLine = function(e) {\n' +
  '      return e == "\\r\\n" || e == "\\r" || e == "\\n"\n' +
  '    }, this.getLine = function(e) {\n' +
  '      return this.$lines[e] || ""\n' +
  '    }, this.getLines = function(e, t) {\n' +
  '      return this.$lines.slice(e, t + 1)\n' +
  '    }, this.getAllLines = function() {\n' +
  '      return this.getLines(0, this.getLength())\n' +
  '    }, this.getLength = function() {\n' +
  '      return this.$lines.length\n' +
  '    }, this.getTextRange = function(e) {\n' +
  '      if (e.start.row == e.end.row) return this.getLine(e.start.row)\n' +
  '        .substring(e.start.column, e.end.column);\n' +
  '      var t = this.getLines(e.start.row, e.end.row);\n' +
  '      t[0] = (t[0] || "")\n' +
  '        .substring(e.start.column);\n' +
  '      var n = t.length - 1;\n' +
  '      return e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column)), t.join(this.getNewLineCharacter())\n' +
  '    }, this.$clipPosition = function(e) {\n' +
  '      var t = this.getLength();\n' +
  '      return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1)\n' +
  '        .length) : e.row < 0 && (e.row = 0), e\n' +
  '    }, this.insert = function(e, t) {\n' +
  '      if (!t || t.length === 0) return e;\n' +
  '      e = this.$clipPosition(e), this.getLength() <= 1 && this.$detectNewLine(t);\n' +
  '      var n = this.$split(t),\n' +
  '        r = n.splice(0, 1)[0],\n' +
  '        i = n.length == 0 ? null : n.splice(n.length - 1, 1)[0];\n' +
  '      return e = this.insertInLine(e, r), i !== null && (e = this.insertNewLine(e), e = this._insertLines(e.row, n), e = this.insertInLine(e, i || "")), e\n' +
  '    }, this.insertLines = function(e, t) {\n' +
  '      return e >= this.getLength() ? this.insert({\n' +
  '        row: e,\n' +
  '        column: 0\n' +
  '      }, "\\n" + t.join("\\n")) : this._insertLines(Math.max(e, 0), t)\n' +
  '    }, this._insertLines = function(e, t) {\n' +
  '      if (t.length == 0) return {\n' +
  '        row: e,\n' +
  '        column: 0\n' +
  '      };\n' +
  '      while (t.length > 2e4) {\n' +
  '        var n = this._insertLines(e, t.slice(0, 2e4));\n' +
  '        t = t.slice(2e4), e = n.row\n' +
  '      }\n' +
  '      var r = [e, 0];\n' +
  '      r.push.apply(r, t), this.$lines.splice.apply(this.$lines, r);\n' +
  '      var i = new s(e, 0, e + t.length, 0),\n' +
  '        o = {\n' +
  '          action: "insertLines",\n' +
  '          range: i,\n' +
  '          lines: t\n' +
  '        };\n' +
  '      return this._signal("change", {\n' +
  '        data: o\n' +
  '      }), i.end\n' +
  '    }, this.insertNewLine = function(e) {\n' +
  '      e = this.$clipPosition(e);\n' +
  '      var t = this.$lines[e.row] || "";\n' +
  '      this.$lines[e.row] = t.substring(0, e.column), this.$lines.splice(e.row + 1, 0, t.substring(e.column, t.length));\n' +
  '      var n = {\n' +
  '          row: e.row + 1,\n' +
  '          column: 0\n' +
  '        },\n' +
  '        r = {\n' +
  '          action: "insertText",\n' +
  '          range: s.fromPoints(e, n),\n' +
  '          text: this.getNewLineCharacter()\n' +
  '        };\n' +
  '      return this._signal("change", {\n' +
  '        data: r\n' +
  '      }), n\n' +
  '    }, this.insertInLine = function(e, t) {\n' +
  '      if (t.length == 0) return e;\n' +
  '      var n = this.$lines[e.row] || "";\n' +
  '      this.$lines[e.row] = n.substring(0, e.column) + t + n.substring(e.column);\n' +
  '      var r = {\n' +
  '          row: e.row,\n' +
  '          column: e.column + t.length\n' +
  '        },\n' +
  '        i = {\n' +
  '          action: "insertText",\n' +
  '          range: s.fromPoints(e, r),\n' +
  '          text: t\n' +
  '        };\n' +
  '      return this._signal("change", {\n' +
  '        data: i\n' +
  '      }), r\n' +
  '    }, this.remove = function(e) {\n' +
  '      e instanceof s || (e = s.fromPoints(e.start, e.end)), e.start = this.$clipPosition(e.start), e.end = this.$clipPosition(e.end);\n' +
  '      if (e.isEmpty()) return e.start;\n' +
  '      var t = e.start.row,\n' +
  '        n = e.end.row;\n' +
  '      if (e.isMultiLine()) {\n' +
  '        var r = e.start.column == 0 ? t : t + 1,\n' +
  '          i = n - 1;\n' +
  '        e.end.column > 0 && this.removeInLine(n, 0, e.end.column), i >= r && this._removeLines(r, i), r != t && (this.removeInLine(t, e.start.column, this.getLine(t)\n' +
  '          .length), this.removeNewLine(e.start.row))\n' +
  '      } else this.removeInLine(t, e.start.column, e.end.column);\n' +
  '      return e.start\n' +
  '    }, this.removeInLine = function(e, t, n) {\n' +
  '      if (t == n) return;\n' +
  '      var r = new s(e, t, e, n),\n' +
  '        i = this.getLine(e),\n' +
  '        o = i.substring(t, n),\n' +
  '        u = i.substring(0, t) + i.substring(n, i.length);\n' +
  '      this.$lines.splice(e, 1, u);\n' +
  '      var a = {\n' +
  '        action: "removeText",\n' +
  '        range: r,\n' +
  '        text: o\n' +
  '      };\n' +
  '      return this._signal("change", {\n' +
  '        data: a\n' +
  '      }), r.start\n' +
  '    }, this.removeLines = function(e, t) {\n' +
  '      return e < 0 || t >= this.getLength() ? this.remove(new s(e, 0, t + 1, 0)) : this._removeLines(e, t)\n' +
  '    }, this._removeLines = function(e, t) {\n' +
  '      var n = new s(e, 0, t + 1, 0),\n' +
  '        r = this.$lines.splice(e, t - e + 1),\n' +
  '        i = {\n' +
  '          action: "removeLines",\n' +
  '          range: n,\n' +
  '          nl: this.getNewLineCharacter(),\n' +
  '          lines: r\n' +
  '        };\n' +
  '      return this._signal("change", {\n' +
  '        data: i\n' +
  '      }), r\n' +
  '    }, this.removeNewLine = function(e) {\n' +
  '      var t = this.getLine(e),\n' +
  '        n = this.getLine(e + 1),\n' +
  '        r = new s(e, t.length, e + 1, 0),\n' +
  '        i = t + n;\n' +
  '      this.$lines.splice(e, 2, i);\n' +
  '      var o = {\n' +
  '        action: "removeText",\n' +
  '        range: r,\n' +
  '        text: this.getNewLineCharacter()\n' +
  '      };\n' +
  '      this._signal("change", {\n' +
  '        data: o\n' +
  '      })\n' +
  '    }, this.replace = function(e, t) {\n' +
  '      e instanceof s || (e = s.fromPoints(e.start, e.end));\n' +
  '      if (t.length == 0 && e.isEmpty()) return e.start;\n' +
  '      if (t == this.getTextRange(e)) return e.end;\n' +
  '      this.remove(e);\n' +
  '      if (t) var n = this.insert(e.start, t);\n' +
  '      else n = e.start;\n' +
  '      return n\n' +
  '    }, this.applyDeltas = function(e) {\n' +
  '      for (var t = 0; t < e.length; t++) {\n' +
  '        var n = e[t],\n' +
  '          r = s.fromPoints(n.range.start, n.range.end);\n' +
  '        n.action == "insertLines" ? this.insertLines(r.start.row, n.lines) : n.action == "insertText" ? this.insert(r.start, n.text) : n.action == "removeLines" ? this._removeLines(r.start.row, r.end.row - 1) : n.action == "removeText" && this.remove(r)\n' +
  '      }\n' +
  '    }, this.revertDeltas = function(e) {\n' +
  '      for (var t = e.length - 1; t >= 0; t--) {\n' +
  '        var n = e[t],\n' +
  '          r = s.fromPoints(n.range.start, n.range.end);\n' +
  '        n.action == "insertLines" ? this._removeLines(r.start.row, r.end.row - 1) : n.action == "insertText" ? this.remove(r) : n.action == "removeLines" ? this._insertLines(r.start.row, n.lines) : n.action == "removeText" && this.insert(r.start, n.text)\n' +
  '      }\n' +
  '    }, this.indexToPosition = function(e, t) {\n' +
  '      var n = this.$lines || this.getAllLines(),\n' +
  '        r = this.getNewLineCharacter()\n' +
  '          .length;\n' +
  '      for (var i = t || 0, s = n.length; i < s; i++) {\n' +
  '        e -= n[i].length + r;\n' +
  '        if (e < 0) return {\n' +
  '          row: i,\n' +
  '          column: e + n[i].length + r\n' +
  '        }\n' +
  '      }\n' +
  '      return {\n' +
  '        row: s - 1,\n' +
  '        column: n[s - 1].length\n' +
  '      }\n' +
  '    }, this.positionToIndex = function(e, t) {\n' +
  '      var n = this.$lines || this.getAllLines(),\n' +
  '        r = this.getNewLineCharacter()\n' +
  '          .length,\n' +
  '        i = 0,\n' +
  '        s = Math.min(e.row, n.length);\n' +
  '      for (var o = t || 0; o < s; ++o) i += n[o].length + r;\n' +
  '      return i + e.column\n' +
  '    }\n' +
  '  })\n' +
  '    .call(u.prototype), t.Document = u\n' +
  '}), ace.define("ace/lib/lang", ["require", "exports", "module"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  t.last = function(e) {\n' +
  '    return e[e.length - 1]\n' +
  '  }, t.stringReverse = function(e) {\n' +
  '    return e.split("")\n' +
  '      .reverse()\n' +
  '      .join("")\n' +
  '  }, t.stringRepeat = function(e, t) {\n' +
  '    var n = "";\n' +
  '    while (t > 0) {\n' +
  '      t & 1 && (n += e);\n' +
  '      if (t >>= 1) e += e\n' +
  '    }\n' +
  '    return n\n' +
  '  };\n' +
  '  var r = /^\\s\\s*/,\n' +
  '    i = /\\s\\s*$/;\n' +
  '  t.stringTrimLeft = function(e) {\n' +
  '    return e.replace(r, "")\n' +
  '  }, t.stringTrimRight = function(e) {\n' +
  '    return e.replace(i, "")\n' +
  '  }, t.copyObject = function(e) {\n' +
  '    var t = {};\n' +
  '    for (var n in e) t[n] = e[n];\n' +
  '    return t\n' +
  '  }, t.copyArray = function(e) {\n' +
  '    var t = [];\n' +
  '    for (var n = 0, r = e.length; n < r; n++) e[n] && typeof e[n] == "object" ? t[n] = this.copyObject(e[n]) : t[n] = e[n];\n' +
  '    return t\n' +
  '  }, t.deepCopy = function s(e) {\n' +
  '    if (typeof e != "object" || !e) return e;\n' +
  '    var t;\n' +
  '    if (Array.isArray(e)) {\n' +
  '      t = [];\n' +
  '      for (var n = 0; n < e.length; n++) t[n] = s(e[n]);\n' +
  '      return t\n' +
  '    }\n' +
  '    var r = e.constructor;\n' +
  '    if (r === RegExp) return e;\n' +
  '    t = r();\n' +
  '    for (var n in e) t[n] = s(e[n]);\n' +
  '    return t\n' +
  '  }, t.arrayToMap = function(e) {\n' +
  '    var t = {};\n' +
  '    for (var n = 0; n < e.length; n++) t[e[n]] = 1;\n' +
  '    return t\n' +
  '  }, t.createMap = function(e) {\n' +
  '    var t = Object.create(null);\n' +
  '    for (var n in e) t[n] = e[n];\n' +
  '    return t\n' +
  '  }, t.arrayRemove = function(e, t) {\n' +
  '    for (var n = 0; n <= e.length; n++) t === e[n] && e.splice(n, 1)\n' +
  '  }, t.escapeRegExp = function(e) {\n' +
  '    return e.replace(/([.*+?^${}()|[\\]\\/\\\\])/g, "\\\\$1")\n' +
  '  }, t.escapeHTML = function(e) {\n' +
  '    return e.replace(/&/g, "&#38;")\n' +
  '      .replace(/"/g, "&#34;")\n' +
  '      .replace(/\'/g, "&#39;")\n' +
  '      .replace(/</g, "&#60;")\n' +
  '  }, t.getMatchOffsets = function(e, t) {\n' +
  '    var n = [];\n' +
  '    return e.replace(t, function(e) {\n' +
  '      n.push({\n' +
  '        offset: arguments[arguments.length - 2],\n' +
  '        length: e.length\n' +
  '      })\n' +
  '    }), n\n' +
  '  }, t.deferredCall = function(e) {\n' +
  '    var t = null,\n' +
  '      n = function() {\n' +
  '        t = null, e()\n' +
  '      },\n' +
  '      r = function(e) {\n' +
  '        return r.cancel(), t = setTimeout(n, e || 0), r\n' +
  '      };\n' +
  '    return r.schedule = r, r.call = function() {\n' +
  '      return this.cancel(), e(), r\n' +
  '    }, r.cancel = function() {\n' +
  '      return clearTimeout(t), t = null, r\n' +
  '    }, r.isPending = function() {\n' +
  '      return t\n' +
  '    }, r\n' +
  '  }, t.delayedCall = function(e, t) {\n' +
  '    var n = null,\n' +
  '      r = function() {\n' +
  '        n = null, e()\n' +
  '      },\n' +
  '      i = function(e) {\n' +
  '        n == null && (n = setTimeout(r, e || t))\n' +
  '      };\n' +
  '    return i.delay = function(e) {\n' +
  '      n && clearTimeout(n), n = setTimeout(r, e || t)\n' +
  '    }, i.schedule = i, i.call = function() {\n' +
  '      this.cancel(), e()\n' +
  '    }, i.cancel = function() {\n' +
  '      n && clearTimeout(n), n = null\n' +
  '    }, i.isPending = function() {\n' +
  '      return n\n' +
  '    }, i\n' +
  '  }\n' +
  '}), ace.define("ace/worker/mirror", ["require", "exports", "module", "ace/document", "ace/lib/lang"], function(e, t, n) {\n' +
  '  "use strict";\n' +
  '  var r = e("../document")\n' +
  '      .Document,\n' +
  '    i = e("../lib/lang"),\n' +
  '    s = t.Mirror = function(e) {\n' +
  '      this.sender = e;\n' +
  '      var t = this.doc = new r(""),\n' +
  '        n = this.deferredUpdate = i.delayedCall(this.onUpdate.bind(this)),\n' +
  '        s = this;\n' +
  '      e.on("change", function(e) {\n' +
  '        t.applyDeltas(e.data);\n' +
  '        if (s.$timeout) return n.schedule(s.$timeout);\n' +
  '        s.onUpdate()\n' +
  '      })\n' +
  '    };\n' +
  '  (function() {\n' +
  '    this.$timeout = 500, this.setTimeout = function(e) {\n' +
  '      this.$timeout = e\n' +
  '    }, this.setValue = function(e) {\n' +
  '      this.doc.setValue(e), this.deferredUpdate.schedule(this.$timeout)\n' +
  '    }, this.getValue = function(e) {\n' +
  '      this.sender.callback(this.doc.getValue(), e)\n' +
  '    }, this.onUpdate = function() {}, this.isPending = function() {\n' +
  '      return this.deferredUpdate.isPending()\n' +
  '    }\n' +
  '  })\n' +
  '    .call(s.prototype)\n' +
  '}), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function(e, t, n) {\n' +
  '  function r() {}\n' +
  '\n' +
  '  function w(e) {\n' +
  '    try {\n' +
  '      return Object.defineProperty(e, "sentinel", {}), "sentinel" in e\n' +
  '    } catch (t) {}\n' +
  '  }\n' +
  '\n' +
  '  function H(e) {\n' +
  '    return e = +e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e\n' +
  '  }\n' +
  '\n' +
  '  function B(e) {\n' +
  '    var t = typeof e;\n' +
  '    return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string"\n' +
  '  }\n' +
  '\n' +
  '  function j(e) {\n' +
  '    var t, n, r;\n' +
  '    if (B(e)) return e;\n' +
  '    n = e.valueOf;\n' +
  '    if (typeof n == "function") {\n' +
  '      t = n.call(e);\n' +
  '      if (B(t)) return t\n' +
  '    }\n' +
  '    r = e.toString;\n' +
  '    if (typeof r == "function") {\n' +
  '      t = r.call(e);\n' +
  '      if (B(t)) return t\n' +
  '    }\n' +
  '    throw new TypeError\n' +
  '  }\n' +
  '  Function.prototype.bind || (Function.prototype.bind = function(t) {\n' +
  '    var n = this;\n' +
  '    if (typeof n != "function") throw new TypeError("Function.prototype.bind called on incompatible " + n);\n' +
  '    var i = u.call(arguments, 1),\n' +
  '      s = function() {\n' +
  '        if (this instanceof s) {\n' +
  '          var e = n.apply(this, i.concat(u.call(arguments)));\n' +
  '          return Object(e) === e ? e : this\n' +
  '        }\n' +
  '        return n.apply(t, i.concat(u.call(arguments)))\n' +
  '      };\n' +
  '    return n.prototype && (r.prototype = n.prototype, s.prototype = new r, r.prototype = null), s\n' +
  '  });\n' +
  '  var i = Function.prototype.call,\n' +
  '    s = Array.prototype,\n' +
  '    o = Object.prototype,\n' +
  '    u = s.slice,\n' +
  '    a = i.bind(o.toString),\n' +
  '    f = i.bind(o.hasOwnProperty),\n' +
  '    l, c, h, p, d;\n' +
  '  if (d = f(o, "__defineGetter__")) l = i.bind(o.__defineGetter__), c = i.bind(o.__defineSetter__), h = i.bind(o.__lookupGetter__), p = i.bind(o.__lookupSetter__);\n' +
  '  if ([1, 2].splice(0)\n' +
  '    .length != 2)\n' +
  '    if (! function() {\n' +
  '      function e(e) {\n' +
  '        var t = new Array(e + 2);\n' +
  '        return t[0] = t[1] = 0, t\n' +
  '      }\n' +
  '      var t = [],\n' +
  '        n;\n' +
  '      t.splice.apply(t, e(20)), t.splice.apply(t, e(26)), n = t.length, t.splice(5, 0, "XXX"), n + 1 == t.length;\n' +
  '      if (n + 1 == t.length) return !0\n' +
  '    }()) Array.prototype.splice = function(e, t) {\n' +
  '      var n = this.length;\n' +
  '      e > 0 ? e > n && (e = n) : e == void 0 ? e = 0 : e < 0 && (e = Math.max(n + e, 0)), e + t < n || (t = n - e);\n' +
  '      var r = this.slice(e, e + t),\n' +
  '        i = u.call(arguments, 2),\n' +
  '        s = i.length;\n' +
  '      if (e === n) s && this.push.apply(this, i);\n' +
  '      else {\n' +
  '        var o = Math.min(t, n - e),\n' +
  '          a = e + o,\n' +
  '          f = a + s - o,\n' +
  '          l = n - a,\n' +
  '          c = n - o;\n' +
  '        if (f < a)\n' +
  '          for (var h = 0; h < l; ++h) this[f + h] = this[a + h];\n' +
  '        else if (f > a)\n' +
  '          for (h = l; h--;) this[f + h] = this[a + h];\n' +
  '        if (s && e === c) this.length = c, this.push.apply(this, i);\n' +
  '        else {\n' +
  '          this.length = c + s;\n' +
  '          for (h = 0; h < s; ++h) this[e + h] = i[h]\n' +
  '        }\n' +
  '      }\n' +
  '      return r\n' +
  '    };\n' +
  '    else {\n' +
  '      var v = Array.prototype.splice;\n' +
  '      Array.prototype.splice = function(e, t) {\n' +
  '        return arguments.length ? v.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(u.call(arguments, 2))) : []\n' +
  '      }\n' +
  '    }\n' +
  '  Array.isArray || (Array.isArray = function(t) {\n' +
  '    return a(t) == "[object Array]"\n' +
  '  });\n' +
  '  var m = Object("a"),\n' +
  '    g = m[0] != "a" || !(0 in m);\n' +
  '  Array.prototype.forEach || (Array.prototype.forEach = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = arguments[1],\n' +
  '      s = -1,\n' +
  '      o = r.length >>> 0;\n' +
  '    if (a(t) != "[object Function]") throw new TypeError;\n' +
  '    while (++s < o) s in r && t.call(i, r[s], s, n)\n' +
  '  }), Array.prototype.map || (Array.prototype.map = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0,\n' +
  '      s = Array(i),\n' +
  '      o = arguments[1];\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    for (var u = 0; u < i; u++) u in r && (s[u] = t.call(o, r[u], u, n));\n' +
  '    return s\n' +
  '  }), Array.prototype.filter || (Array.prototype.filter = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0,\n' +
  '      s = [],\n' +
  '      o, u = arguments[1];\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    for (var f = 0; f < i; f++) f in r && (o = r[f], t.call(u, o, f, n) && s.push(o));\n' +
  '    return s\n' +
  '  }), Array.prototype.every || (Array.prototype.every = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0,\n' +
  '      s = arguments[1];\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    for (var o = 0; o < i; o++)\n' +
  '      if (o in r && !t.call(s, r[o], o, n)) return !1;\n' +
  '    return !0\n' +
  '  }), Array.prototype.some || (Array.prototype.some = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0,\n' +
  '      s = arguments[1];\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    for (var o = 0; o < i; o++)\n' +
  '      if (o in r && t.call(s, r[o], o, n)) return !0;\n' +
  '    return !1\n' +
  '  }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0;\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    if (!i && arguments.length == 1) throw new TypeError("reduce of empty array with no initial value");\n' +
  '    var s = 0,\n' +
  '      o;\n' +
  '    if (arguments.length >= 2) o = arguments[1];\n' +
  '    else\n' +
  '      do {\n' +
  '        if (s in r) {\n' +
  '          o = r[s++];\n' +
  '          break\n' +
  '        }\n' +
  '        if (++s >= i) throw new TypeError("reduce of empty array with no initial value")\n' +
  '      } while (!0);\n' +
  '    for (; s < i; s++) s in r && (o = t.call(void 0, o, r[s], s, n));\n' +
  '    return o\n' +
  '  }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(t) {\n' +
  '    var n = F(this),\n' +
  '      r = g && a(this) == "[object String]" ? this.split("") : n,\n' +
  '      i = r.length >>> 0;\n' +
  '    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");\n' +
  '    if (!i && arguments.length == 1) throw new TypeError("reduceRight of empty array with no initial value");\n' +
  '    var s, o = i - 1;\n' +
  '    if (arguments.length >= 2) s = arguments[1];\n' +
  '    else\n' +
  '      do {\n' +
  '        if (o in r) {\n' +
  '          s = r[o--];\n' +
  '          break\n' +
  '        }\n' +
  '        if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")\n' +
  '      } while (!0);\n' +
  '    do o in this && (s = t.call(void 0, s, r[o], o, n)); while (o--);\n' +
  '    return s\n' +
  '  });\n' +
  '  if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1) Array.prototype.indexOf = function(t) {\n' +
  '    var n = g && a(this) == "[object String]" ? this.split("") : F(this),\n' +
  '      r = n.length >>> 0;\n' +
  '    if (!r) return -1;\n' +
  '    var i = 0;\n' +
  '    arguments.length > 1 && (i = H(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);\n' +
  '    for (; i < r; i++)\n' +
  '      if (i in n && n[i] === t) return i;\n' +
  '    return -1\n' +
  '  };\n' +
  '  if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = function(t) {\n' +
  '    var n = g && a(this) == "[object String]" ? this.split("") : F(this),\n' +
  '      r = n.length >>> 0;\n' +
  '    if (!r) return -1;\n' +
  '    var i = r - 1;\n' +
  '    arguments.length > 1 && (i = Math.min(i, H(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);\n' +
  '    for (; i >= 0; i--)\n' +
  '      if (i in n && t === n[i]) return i;\n' +
  '    return -1\n' +
  '  };\n' +
  '  Object.getPrototypeOf || (Object.getPrototypeOf = function(t) {\n' +
  '    return t.__proto__ || (t.constructor ? t.constructor.prototype : o)\n' +
  '  });\n' +
  '  if (!Object.getOwnPropertyDescriptor) {\n' +
  '    var y = "Object.getOwnPropertyDescriptor called on a non-object: ";\n' +
  '    Object.getOwnPropertyDescriptor = function(t, n) {\n' +
  '      if (typeof t != "object" && typeof t != "function" || t === null) throw new TypeError(y + t);\n' +
  '      if (!f(t, n)) return;\n' +
  '      var r, i, s;\n' +
  '      r = {\n' +
  '        enumerable: !0,\n' +
  '        configurable: !0\n' +
  '      };\n' +
  '      if (d) {\n' +
  '        var u = t.__proto__;\n' +
  '        t.__proto__ = o;\n' +
  '        var i = h(t, n),\n' +
  '          s = p(t, n);\n' +
  '        t.__proto__ = u;\n' +
  '        if (i || s) return i && (r.get = i), s && (r.set = s), r\n' +
  '      }\n' +
  '      return r.value = t[n], r\n' +
  '    }\n' +
  '  }\n' +
  '  Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {\n' +
  '    return Object.keys(t)\n' +
  '  });\n' +
  '  if (!Object.create) {\n' +
  '    var b;\n' +
  '    Object.prototype.__proto__ === null ? b = function() {\n' +
  '      return {\n' +
  '        __proto__: null\n' +
  '      }\n' +
  '    } : b = function() {\n' +
  '      var e = {};\n' +
  '      for (var t in e) e[t] = null;\n' +
  '      return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e\n' +
  '    }, Object.create = function(t, n) {\n' +
  '      var r;\n' +
  '      if (t === null) r = b();\n' +
  '      else {\n' +
  '        if (typeof t != "object") throw new TypeError("typeof prototype[" + typeof t + "] != \'object\'");\n' +
  '        var i = function() {};\n' +
  '        i.prototype = t, r = new i, r.__proto__ = t\n' +
  '      }\n' +
  '      return n !== void 0 && Object.defineProperties(r, n), r\n' +
  '    }\n' +
  '  }\n' +
  '  if (Object.defineProperty) {\n' +
  '    var E = w({}),\n' +
  '      S = typeof document == "undefined" || w(document.createElement("div"));\n' +
  '    if (!E || !S) var x = Object.defineProperty\n' +
  '  }\n' +
  '  if (!Object.defineProperty || x) {\n' +
  '    var T = "Property description must be an object: ",\n' +
  '      N = "Object.defineProperty called on non-object: ",\n' +
  '      C = "getters & setters can not be defined on this javascript engine";\n' +
  '    Object.defineProperty = function(t, n, r) {\n' +
  '      if (typeof t != "object" && typeof t != "function" || t === null) throw new TypeError(N + t);\n' +
  '      if (typeof r != "object" && typeof r != "function" || r === null) throw new TypeError(T + r);\n' +
  '      if (x) try {\n' +
  '        return x.call(Object, t, n, r)\n' +
  '      } catch (i) {}\n' +
  '      if (f(r, "value"))\n' +
  '        if (d && (h(t, n) || p(t, n))) {\n' +
  '          var s = t.__proto__;\n' +
  '          t.__proto__ = o, delete t[n], t[n] = r.value, t.__proto__ = s\n' +
  '        } else t[n] = r.value;\n' +
  '      else {\n' +
  '        if (!d) throw new TypeError(C);\n' +
  '        f(r, "get") && l(t, n, r.get), f(r, "set") && c(t, n, r.set)\n' +
  '      }\n' +
  '      return t\n' +
  '    }\n' +
  '  }\n' +
  '  Object.defineProperties || (Object.defineProperties = function(t, n) {\n' +
  '    for (var r in n) f(n, r) && Object.defineProperty(t, r, n[r]);\n' +
  '    return t\n' +
  '  }), Object.seal || (Object.seal = function(t) {\n' +
  '    return t\n' +
  '  }), Object.freeze || (Object.freeze = function(t) {\n' +
  '    return t\n' +
  '  });\n' +
  '  try {\n' +
  '    Object.freeze(function() {})\n' +
  '  } catch (k) {\n' +
  '    Object.freeze = function(t) {\n' +
  '      return function(n) {\n' +
  '        return typeof n == "function" ? n : t(n)\n' +
  '      }\n' +
  '    }(Object.freeze)\n' +
  '  }\n' +
  '  Object.preventExtensions || (Object.preventExtensions = function(t) {\n' +
  '    return t\n' +
  '  }), Object.isSealed || (Object.isSealed = function(t) {\n' +
  '    return !1\n' +
  '  }), Object.isFrozen || (Object.isFrozen = function(t) {\n' +
  '    return !1\n' +
  '  }), Object.isExtensible || (Object.isExtensible = function(t) {\n' +
  '    if (Object(t) === t) throw new TypeError;\n' +
  '    var n = "";\n' +
  '    while (f(t, n)) n += "?";\n' +
  '    t[n] = !0;\n' +
  '    var r = f(t, n);\n' +
  '    return delete t[n], r\n' +
  '  });\n' +
  '  if (!Object.keys) {\n' +
  '    var L = !0,\n' +
  '      A = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],\n' +
  '      O = A.length;\n' +
  '    for (var M in {\n' +
  '      toString: null\n' +
  '    }) L = !1;\n' +
  '    Object.keys = function I(e) {\n' +
  '      if (typeof e != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");\n' +
  '      var I = [];\n' +
  '      for (var t in e) f(e, t) && I.push(t);\n' +
  '      if (L)\n' +
  '        for (var n = 0, r = O; n < r; n++) {\n' +
  '          var i = A[n];\n' +
  '          f(e, i) && I.push(i)\n' +
  '        }\n' +
  '      return I\n' +
  '    }\n' +
  '  }\n' +
  '  Date.now || (Date.now = function() {\n' +
  '    return (new Date)\n' +
  '      .getTime()\n' +
  '  });\n' +
  '  var _ = "\t\\n\\f\\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";\n' +
  '  if (!String.prototype.trim || _.trim()) {\n' +
  '    _ = "[" + _ + "]";\n' +
  '    var D = new RegExp("^" + _ + _ + "*"),\n' +
  '      P = new RegExp(_ + _ + "*$");\n' +
  '    String.prototype.trim = function() {\n' +
  '      return String(this)\n' +
  '        .replace(D, "")\n' +
  '        .replace(P, "")\n' +
  '    }\n' +
  '  }\n' +
  '  var F = function(e) {\n' +
  '    if (e == null) throw new TypeError("can\'t convert " + e + " to object");\n' +
  '    return Object(e)\n' +
  '  }\n' +
  '})\n' +
  '\n' +
  'ace.define(\'ace/worker/provn\',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {\n' +
  '  "use strict";\n' +
  '\n' +
  '  var oop = require("ace/lib/oop");\n' +
  '  var Mirror = require("ace/worker/mirror").Mirror;\n' +
  '\n' +
  '  var ProvnWorker = function(sender) {\n' +
  '    Mirror.call(this, sender);\n' +
  '    this.setTimeout(200);\n' +
  '    this.$dialect = null;\n' +
  '  };\n' +
  '\n' +
  '  oop.inherits(ProvnWorker, Mirror);\n' +
  '\n' +
  '  (function() {\n' +
  '    var antlr4 = require(\'antlr4/index\');\n' +
  '    var mylexer = require(\'provnlanguage/PROV_NLexer\');\n' +
  '    var myparser = require(\'provnlanguage/PROV_NParser\');\n' +
  '// class for gathering errors and posting them to ACE editor\n' +
  '    var AnnotatingErrorListener = function(annotations) {\n' +
  '      antlr4.error.ErrorListener.call(this);\n' +
  '      this.annotations = annotations;\n' +
  '      return this;\n' +
  '    };\n' +
  '\n' +
  '    AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);\n' +
  '    AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;\n' +
  '\n' +
  '    AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {\n' +
  '      this.annotations.push({\n' +
  '        row: line - 1,\n' +
  '        column: column,\n' +
  '        text: msg,\n' +
  '        type: "error"\n' +
  '      });\n' +
  '    };\n' +
  '    var validate = function(input) {\n' +
  '      var stream = CharStreams.fromString(input);\n' +
  '      var lexer = new mylexer.PROV_NLexer(stream);\n' +
  '      var tokens = new antlr4.CommonTokenStream(lexer);\n' +
  '      var parser = new myparser.PROV_NParser(tokens);\n' +
  '      var annotations = [];\n' +
  '      var listener = new AnnotatingErrorListener(annotations)\n' +
  '      parser.removeErrorListeners();\n' +
  '      parser.addErrorListener(listener);\n' +
  '      parser.parseMyRule();\n' +
  '      return annotations;\n' +
  '    };\n' +
  '\n' +
  '    this.onUpdate = function() {\n' +
  '      var value = this.doc.getValue();\n' +
  '      var annotations = validate(value);\n' +
  '      this.sender.emit("annotate", annotations);\n' +
  '    };\n' +
  '\n' +
  '  }).call(ProvnWorker.prototype);\n' +
  '\n' +
  '  exports.ProvnWorker = ProvnWorker;\n' +
  '});\n';
