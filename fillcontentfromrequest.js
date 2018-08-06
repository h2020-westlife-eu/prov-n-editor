//fills content sent in request hashtag e.g. #content=document\ndefault <http://example.org>\nentity (e1)\nendDocument or #contentBase64=e4rerfe= or #contentCompressed=r45tgre3=
import * as LZString from "./vendor/lz-string/lz-string.js"

export function getHashValue(key) {
    //console.log("getting",key," from url hash: '",location.hash,"'");
    var matches = location.hash.match(new RegExp(key + '=([^&]*)'));
    //if (matches) console.log("matches "+matches[1]);
    return matches ? matches[1] : null;
}

export function getContent() {

        if (location.hash.length===0) return null;

        let contenttmp = getHashValue('content') ;
        if (contenttmp) return decodeURI(contenttmp);

        contenttmp = getHashValue('contentBase64');
        if (contenttmp) return atob(contenttmp);

        contenttmp = getHashValue('contentLZ');
        if (contenttmp) return LZString.LZString.decompressFromBase64(contenttmp);

        return null;
}

export function compressContent(str) {
        return LZString.LZString.compressToBase64(str);
}

export var content = getContent()
