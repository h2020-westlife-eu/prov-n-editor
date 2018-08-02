== ACE Editor for PROVN with syntax highlight and syntax validation using ANTL4 grammar

Proof of concept sample editor.

Steps to do

- get grammar into parser dir
- generate JavaScript target: `antlr4 -Dlanguage=JavaScript PROV_N.g4`
- modify the `*.js` files to point to antlr4 in `vendor/antlr4/index` instead of `antlr4/index`
- check modify the `prov-n-worker.js` to point to the generated Lexer, Parser
- use index.html to directly test the output
- to build distribution - install webpack and copy-webpack-plugin `npm install -g webpack-cli` `npm install copy-webpack-plugin` and execute `webpack`
this will produce `dist/` directory which can be copied into desired location - index.html contains relative links.
