## sample PROV-N editor
to prepare
- in IDE copy content of backup/provn-worker.js into js string in worker/provn.js as content of string in `module.exports.src` definition
```
module.exports.src='...content of provn-worker.js file...'
```
- copy `worker/provn.js` to `node-modules/brace/worker`
- copy `mode/provn.js` to `node-modules/brace/mode`
- `au build` or (`watch.sh`)

##references
- [ANTLR4 grammar in ACE editor](https://github.com/antlr/antlr4/blob/master/doc/ace-javascript-target.md)
- [browserify compatible ACE editor](https://github.com/thlorenz/brace)

