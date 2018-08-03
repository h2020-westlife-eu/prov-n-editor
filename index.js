import {} from "./vendor/ace-builds/src-noconflict/ace.js";
import {} from "./vendor/ace-builds/src-noconflict/theme-chrome.js"
import {} from "./vendor/ace-builds/src-noconflict/ext-language_tools.js";
import {} from "./prov-n-mode.js";
import * as furl from "./fillcontentfromrequest.js";

ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setOptions({enableBasicAutocompletion:true})
editor.setTheme('ace/theme/chrome');
editor.getSession().setMode("ace/mode/provn");
//console.log("hashtag content from url:",furl.content);
if (furl.content) editor.setValue(furl.content);

function sendbackcompressed() {
    var message = editor.getValue();
    //console.log(message);
    var compressed = furl.compressContent(message);
    //console.log(compressed);
    var cmessage = {"content-type":"application/x-lzip","content":compressed}
    //console.log(cmessage);
    if (window.opener) {
        window.opener.postMessage(JSON.stringify(cmessage), "*");
        window.close();
    }
}

function sendbackplain(){
    var message = editor.getValue();
    //console.log(message);
    //var compressed = furl.compressContent(message);
    //console.log(compressed);
    var cmessage = {"content-type":"text/plain","content":message}
    //console.log(cmessage);
    if (window.opener) {
        window.opener.postMessage(JSON.stringify(cmessage), "*");
        window.close();
    }

}
window.sendbackcompressed = sendbackcompressed;
window.sendbackplain=sendbackplain;
