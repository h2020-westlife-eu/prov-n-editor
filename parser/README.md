# PROV-N: The Provenance Notation Grammar

An ANTLR4 grammar for [PROV-N](https://www.w3.org/TR/prov-n/) documents.

# Testing

/examples folder contains provn documents. In order to test all the documents there run

`mvn clean test`

# Create target parser
`antlr.sh` 

downloads antlr4 distribution and executes it. If no arguments is passed, it creates target JavaScript files of PROV_N.g4 grammar. 
If some argument is passed - then antlr4 is executed with those arguments.

# Reference

Antlr v4 grammars: [github.com/antlr/grammars-v4](https://github.com/antlr/grammars-v4) 

If PROV_N.g4 grammar is updated, sync/merge changes and appropriate example into [https://github.com/antlr/grammars-v4/tree/master/prov-n]


