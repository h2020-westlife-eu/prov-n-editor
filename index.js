import {} from "./vendor/ace-builds/src-noconflict/ace.js";
import {} from "./vendor/ace-builds/src-noconflict/theme-chrome.js"
import {} from "./vendor/ace-builds/src-noconflict/ext-language_tools.js";
import {} from "./prov-n-mode.js";
//require('worker-loader!./prov-n-worker.js')

ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setOptions({enableBasicAutocompletion:true})
editor.setTheme('ace/theme/chrome');
editor.getSession().setMode("ace/mode/provn");
