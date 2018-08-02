#!/usr/bin/env bash
# antlr.sh [antlr arguments]
# downloads antlr4
# if no arguments is passed, it creates target JavaScript files of PROV_N.g4 grammar
# if some argument is passed - then antlr4 is executed with those arguments.

# download antlr4
if [ ! -f antlr-4.7.1-complete.jar ]; then
  wget https://www.antlr.org/download/antlr-4.7.1-complete.jar
fi
#execute antlr4
export CLASSPATH=antlr-4.7.1-complete.jar:$CLASSPATH
if [ $# -eq 0 ]; then
  #no arguments supplied, compile with default target -Dlanguage=JavaScript PROV_N.g4
  java -Xmx500M -cp "antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript PROV_N.g4
else
  #arguments supplied - execute with them
  java -Xmx500M -cp "antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool $*
fi