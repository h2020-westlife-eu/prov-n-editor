// Generated from PROV_N.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('vendor/antlr4/index');
var PROV_NListener = require('./PROV_NListener').PROV_NListener;
var grammarFileName = "PROV_N.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00036\u01fa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u0003\u0002\u0003\u0002\u0005\u0002k\n\u0002\u0003\u0002",
    "\u0007\u0002n\n\u0002\f\u0002\u000e\u0002q\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002u\n\u0002\f\u0002\u000e\u0002x\u000b\u0002\u0005\u0002",
    "z\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0080\n\u0003\u0003\u0003\u0007\u0003\u0083\n\u0003\f\u0003\u000e\u0003",
    "\u0086\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0094\n\u0007\u0003\u0007\u0007\u0007",
    "\u0097\n\u0007\f\u0007\u000e\u0007\u009a\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u00b2\n\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00bf\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u00c5\n\f\f\f\u000e\f\u00c8\u000b\f\u0005\f\u00ca\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00d4\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00de\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00e2\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00ec\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00f3\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0100",
    "\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u0108\n\u0017\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u010c\n\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u0112\n\u001a\u0003\u001b\u0003\u001b\u0005\u001b\u0116",
    "\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0005\u001d",
    "\u011c\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003!\u0003!\u0005!\u0126\n!\u0003\"\u0003\"\u0003#\u0003",
    "#\u0005#\u012c\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0005$\u0137\n$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u0147\n%\u0003",
    "%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0005&\u0157\n&\u0003&\u0003&\u0003&\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005",
    "\'\u0165\n\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005",
    "*\u0182\n*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0005,\u0198\n,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0005",
    "-\u01aa\n-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00072\u01d3\n2\f2\u000e2\u01d6\u000b2\u00032\u00032\u00032\u0003",
    "3\u00033\u00033\u00033\u00033\u00053\u01e0\n3\u00034\u00034\u00034\u0003",
    "4\u00074\u01e6\n4\f4\u000e4\u01e9\u000b4\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00074\u01f1\n4\f4\u000e4\u01f4\u000b4\u00034\u0003",
    "4\u00054\u01f8\n4\u00034\u0002\u00025\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVXZ\\^`bdf\u0002\u0003\u0003\u0002-.\u0002\u01ff\u0002h\u0003",
    "\u0002\u0002\u0002\u0004\u007f\u0003\u0002\u0002\u0002\u0006\u0087\u0003",
    "\u0002\u0002\u0002\b\u008a\u0003\u0002\u0002\u0002\n\u008e\u0003\u0002",
    "\u0002\u0002\f\u0090\u0003\u0002\u0002\u0002\u000e\u009d\u0003\u0002",
    "\u0002\u0002\u0010\u00b1\u0003\u0002\u0002\u0002\u0012\u00b3\u0003\u0002",
    "\u0002\u0002\u0014\u00be\u0003\u0002\u0002\u0002\u0016\u00c9\u0003\u0002",
    "\u0002\u0002\u0018\u00cb\u0003\u0002\u0002\u0002\u001a\u00cf\u0003\u0002",
    "\u0002\u0002\u001c\u00d3\u0003\u0002\u0002\u0002\u001e\u00d5\u0003\u0002",
    "\u0002\u0002 \u00d9\u0003\u0002\u0002\u0002\"\u00e1\u0003\u0002\u0002",
    "\u0002$\u00e3\u0003\u0002\u0002\u0002&\u00f2\u0003\u0002\u0002\u0002",
    "(\u00f4\u0003\u0002\u0002\u0002*\u00f6\u0003\u0002\u0002\u0002,\u0107",
    "\u0003\u0002\u0002\u0002.\u010b\u0003\u0002\u0002\u00020\u010d\u0003",
    "\u0002\u0002\u00022\u0111\u0003\u0002\u0002\u00024\u0115\u0003\u0002",
    "\u0002\u00026\u0117\u0003\u0002\u0002\u00028\u011b\u0003\u0002\u0002",
    "\u0002:\u011d\u0003\u0002\u0002\u0002<\u011f\u0003\u0002\u0002\u0002",
    ">\u0121\u0003\u0002\u0002\u0002@\u0125\u0003\u0002\u0002\u0002B\u0127",
    "\u0003\u0002\u0002\u0002D\u012b\u0003\u0002\u0002\u0002F\u012d\u0003",
    "\u0002\u0002\u0002H\u013b\u0003\u0002\u0002\u0002J\u014b\u0003\u0002",
    "\u0002\u0002L\u015b\u0003\u0002\u0002\u0002N\u0169\u0003\u0002\u0002",
    "\u0002P\u0172\u0003\u0002\u0002\u0002R\u0178\u0003\u0002\u0002\u0002",
    "T\u0186\u0003\u0002\u0002\u0002V\u018f\u0003\u0002\u0002\u0002X\u019c",
    "\u0003\u0002\u0002\u0002Z\u01ae\u0003\u0002\u0002\u0002\\\u01b7\u0003",
    "\u0002\u0002\u0002^\u01be\u0003\u0002\u0002\u0002`\u01c5\u0003\u0002",
    "\u0002\u0002b\u01cc\u0003\u0002\u0002\u0002d\u01df\u0003\u0002\u0002",
    "\u0002f\u01f7\u0003\u0002\u0002\u0002hj\u0007 \u0002\u0002ik\u0005\u0004",
    "\u0003\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ko\u0003",
    "\u0002\u0002\u0002ln\u0005\u0010\t\u0002ml\u0003\u0002\u0002\u0002n",
    "q\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002py\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rv\u0005\f",
    "\u0007\u0002su\u0005\f\u0007\u0002ts\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yr\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0007!",
    "\u0002\u0002|\u0003\u0003\u0002\u0002\u0002}\u0080\u0005\u0006\u0004",
    "\u0002~\u0080\u0005\b\u0005\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "~\u0003\u0002\u0002\u0002\u0080\u0084\u0003\u0002\u0002\u0002\u0081",
    "\u0083\u0005\b\u0005\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0003\u0002\u0002\u0002\u0085\u0005\u0003\u0002\u0002\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u0003\u0002\u0002\u0088",
    "\u0089\u0007\'\u0002\u0002\u0089\u0007\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0007\u0004\u0002\u0002\u008b\u008c\u0007-\u0002\u0002\u008c",
    "\u008d\u0005\n\u0006\u0002\u008d\t\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007\'\u0002\u0002\u008f\u000b\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0007\"\u0002\u0002\u0091\u0093\u0005\u000e\b\u0002\u0092\u0094\u0005",
    "\u0004\u0003\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003",
    "\u0002\u0002\u0002\u0094\u0098\u0003\u0002\u0002\u0002\u0095\u0097\u0005",
    "\u0010\t\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u009a\u0003",
    "\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0007#\u0002\u0002\u009c\r\u0003\u0002",
    "\u0002\u0002\u009d\u009e\t\u0002\u0002\u0002\u009e\u000f\u0003\u0002",
    "\u0002\u0002\u009f\u00b2\u0005\u0012\n\u0002\u00a0\u00b2\u0005$\u0013",
    "\u0002\u00a1\u00b2\u0005*\u0016\u0002\u00a2\u00b2\u0005F$\u0002\u00a3",
    "\u00b2\u0005H%\u0002\u00a4\u00b2\u0005J&\u0002\u00a5\u00b2\u0005L\'",
    "\u0002\u00a6\u00b2\u0005N(\u0002\u00a7\u00b2\u0005P)\u0002\u00a8\u00b2",
    "\u0005R*\u0002\u00a9\u00b2\u0005T+\u0002\u00aa\u00b2\u0005V,\u0002\u00ab",
    "\u00b2\u0005X-\u0002\u00ac\u00b2\u0005Z.\u0002\u00ad\u00b2\u0005\\/",
    "\u0002\u00ae\u00b2\u0005^0\u0002\u00af\u00b2\u0005`1\u0002\u00b0\u00b2",
    "\u0005b2\u0002\u00b1\u009f\u0003\u0002\u0002\u0002\u00b1\u00a0\u0003",
    "\u0002\u0002\u0002\u00b1\u00a1\u0003\u0002\u0002\u0002\u00b1\u00a2\u0003",
    "\u0002\u0002\u0002\u00b1\u00a3\u0003\u0002\u0002\u0002\u00b1\u00a4\u0003",
    "\u0002\u0002\u0002\u00b1\u00a5\u0003\u0002\u0002\u0002\u00b1\u00a6\u0003",
    "\u0002\u0002\u0002\u00b1\u00a7\u0003\u0002\u0002\u0002\u00b1\u00a8\u0003",
    "\u0002\u0002\u0002\u00b1\u00a9\u0003\u0002\u0002\u0002\u00b1\u00aa\u0003",
    "\u0002\u0002\u0002\u00b1\u00ab\u0003\u0002\u0002\u0002\u00b1\u00ac\u0003",
    "\u0002\u0002\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003",
    "\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2\u0011\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "\u0005\u0002\u0002\u00b4\u00b5\u0007\u0006\u0002\u0002\u00b5\u00b6\u0005",
    "\u000e\b\u0002\u00b6\u00b7\u0005\u0014\u000b\u0002\u00b7\u00b8\u0007",
    "\u0007\u0002\u0002\u00b8\u0013\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007",
    "\b\u0002\u0002\u00ba\u00bb\u0007\t\u0002\u0002\u00bb\u00bc\u0005\u0016",
    "\f\u0002\u00bc\u00bd\u0007\n\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002",
    "\u0002\u00be\u00b9\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002",
    "\u0002\u00bf\u0015\u0003\u0002\u0002\u0002\u00c0\u00ca\u0003\u0002\u0002",
    "\u0002\u00c1\u00c6\u0005\u0018\r\u0002\u00c2\u00c3\u0007\b\u0002\u0002",
    "\u00c3\u00c5\u0005\u0018\r\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00ca\u0003\u0002\u0002\u0002",
    "\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c0\u0003\u0002\u0002\u0002",
    "\u00c9\u00c1\u0003\u0002\u0002\u0002\u00ca\u0017\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0005\u001a\u000e\u0002\u00cc\u00cd\u0007\u000b\u0002\u0002",
    "\u00cd\u00ce\u0005\u001c\u000f\u0002\u00ce\u0019\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\t\u0002\u0002\u0002\u00d0\u001b\u0003\u0002\u0002\u0002",
    "\u00d1\u00d4\u0005\u001e\u0010\u0002\u00d2\u00d4\u0005\"\u0012\u0002",
    "\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002",
    "\u00d4\u001d\u0003\u0002\u0002\u0002\u00d5\u00d6\u00070\u0002\u0002",
    "\u00d6\u00d7\u0007\f\u0002\u0002\u00d7\u00d8\u0005 \u0011\u0002\u00d8",
    "\u001f\u0003\u0002\u0002\u0002\u00d9\u00da\t\u0002\u0002\u0002\u00da",
    "!\u0003\u0002\u0002\u0002\u00db\u00dd\u00070\u0002\u0002\u00dc\u00de",
    "\u00076\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de\u00e2\u0003\u0002\u0002\u0002\u00df\u00e2",
    "\u0007,\u0002\u0002\u00e0\u00e2\u00071\u0002\u0002\u00e1\u00db\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e0\u0003",
    "\u0002\u0002\u0002\u00e2#\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007",
    "\r\u0002\u0002\u00e4\u00e5\u0007\u0006\u0002\u0002\u00e5\u00eb\u0005",
    "\u000e\b\u0002\u00e6\u00e7\u0007\b\u0002\u0002\u00e7\u00e8\u0005&\u0014",
    "\u0002\u00e8\u00e9\u0007\b\u0002\u0002\u00e9\u00ea\u0005&\u0014\u0002",
    "\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e6\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0005\u0014\u000b\u0002\u00ee\u00ef\u0007\u0007\u0002\u0002",
    "\u00ef%\u0003\u0002\u0002\u0002\u00f0\u00f3\u0005(\u0015\u0002\u00f1",
    "\u00f3\u0007+\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2",
    "\u00f1\u0003\u0002\u0002\u0002\u00f3\'\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u00075\u0002\u0002\u00f5)\u0003\u0002\u0002\u0002\u00f6\u00f7",
    "\u0007\u000e\u0002\u0002\u00f7\u00f8\u0007\u0006\u0002\u0002\u00f8\u00f9",
    "\u0005,\u0017\u0002\u00f9\u00ff\u00050\u0019\u0002\u00fa\u00fb\u0007",
    "\b\u0002\u0002\u00fb\u00fc\u00054\u001b\u0002\u00fc\u00fd\u0007\b\u0002",
    "\u0002\u00fd\u00fe\u0005&\u0014\u0002\u00fe\u0100\u0003\u0002\u0002",
    "\u0002\u00ff\u00fa\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0005\u0014\u000b",
    "\u0002\u0102\u0103\u0007\u0007\u0002\u0002\u0103+\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0005.\u0018\u0002\u0105\u0106\u0007\u000f\u0002",
    "\u0002\u0106\u0108\u0003\u0002\u0002\u0002\u0107\u0104\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108-\u0003\u0002\u0002",
    "\u0002\u0109\u010c\u0005\u000e\b\u0002\u010a\u010c\u0007+\u0002\u0002",
    "\u010b\u0109\u0003\u0002\u0002\u0002\u010b\u010a\u0003\u0002\u0002\u0002",
    "\u010c/\u0003\u0002\u0002\u0002\u010d\u010e\u0005\u000e\b\u0002\u010e",
    "1\u0003\u0002\u0002\u0002\u010f\u0112\u00050\u0019\u0002\u0110\u0112",
    "\u0007+\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110",
    "\u0003\u0002\u0002\u0002\u01123\u0003\u0002\u0002\u0002\u0113\u0116",
    "\u00056\u001c\u0002\u0114\u0116\u0007+\u0002\u0002\u0115\u0113\u0003",
    "\u0002\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u01165\u0003",
    "\u0002\u0002\u0002\u0117\u0118\u0005\u000e\b\u0002\u01187\u0003\u0002",
    "\u0002\u0002\u0119\u011c\u0005:\u001e\u0002\u011a\u011c\u0007+\u0002",
    "\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011a\u0003\u0002\u0002",
    "\u0002\u011c9\u0003\u0002\u0002\u0002\u011d\u011e\u0005\u000e\b\u0002",
    "\u011e;\u0003\u0002\u0002\u0002\u011f\u0120\u0005\u000e\b\u0002\u0120",
    "=\u0003\u0002\u0002\u0002\u0121\u0122\u0005\u000e\b\u0002\u0122?\u0003",
    "\u0002\u0002\u0002\u0123\u0126\u0005> \u0002\u0124\u0126\u0007+\u0002",
    "\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125\u0124\u0003\u0002\u0002",
    "\u0002\u0126A\u0003\u0002\u0002\u0002\u0127\u0128\u0005\u000e\b\u0002",
    "\u0128C\u0003\u0002\u0002\u0002\u0129\u012c\u0005B\"\u0002\u012a\u012c",
    "\u0007+\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012b\u012a",
    "\u0003\u0002\u0002\u0002\u012cE\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0007\u0010\u0002\u0002\u012e\u012f\u0007\u0006\u0002\u0002\u012f\u0130",
    "\u0005,\u0017\u0002\u0130\u0136\u00056\u001c\u0002\u0131\u0132\u0007",
    "\b\u0002\u0002\u0132\u0133\u00052\u001a\u0002\u0133\u0134\u0007\b\u0002",
    "\u0002\u0134\u0135\u0005&\u0014\u0002\u0135\u0137\u0003\u0002\u0002",
    "\u0002\u0136\u0131\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002",
    "\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138\u0139\u0005\u0014\u000b",
    "\u0002\u0139\u013a\u0007\u0007\u0002\u0002\u013aG\u0003\u0002\u0002",
    "\u0002\u013b\u013c\u0007\u0011\u0002\u0002\u013c\u013d\u0007\u0006\u0002",
    "\u0002\u013d\u013e\u0005,\u0017\u0002\u013e\u0146\u00056\u001c\u0002",
    "\u013f\u0140\u0007\b\u0002\u0002\u0140\u0141\u00052\u001a\u0002\u0141",
    "\u0142\u0007\b\u0002\u0002\u0142\u0143\u00054\u001b\u0002\u0143\u0144",
    "\u0007\b\u0002\u0002\u0144\u0145\u0005&\u0014\u0002\u0145\u0147\u0003",
    "\u0002\u0002\u0002\u0146\u013f\u0003\u0002\u0002\u0002\u0146\u0147\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0005",
    "\u0014\u000b\u0002\u0149\u014a\u0007\u0007\u0002\u0002\u014aI\u0003",
    "\u0002\u0002\u0002\u014b\u014c\u0007\u0012\u0002\u0002\u014c\u014d\u0007",
    "\u0006\u0002\u0002\u014d\u014e\u0005,\u0017\u0002\u014e\u0156\u0005",
    "6\u001c\u0002\u014f\u0150\u0007\b\u0002\u0002\u0150\u0151\u00052\u001a",
    "\u0002\u0151\u0152\u0007\b\u0002\u0002\u0152\u0153\u00054\u001b\u0002",
    "\u0153\u0154\u0007\b\u0002\u0002\u0154\u0155\u0005&\u0014\u0002\u0155",
    "\u0157\u0003\u0002\u0002\u0002\u0156\u014f\u0003\u0002\u0002\u0002\u0156",
    "\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158",
    "\u0159\u0005\u0014\u000b\u0002\u0159\u015a\u0007\u0007\u0002\u0002\u015a",
    "K\u0003\u0002\u0002\u0002\u015b\u015c\u0007\u0013\u0002\u0002\u015c",
    "\u015d\u0007\u0006\u0002\u0002\u015d\u015e\u0005,\u0017\u0002\u015e",
    "\u0164\u00050\u0019\u0002\u015f\u0160\u0007\b\u0002\u0002\u0160\u0161",
    "\u00054\u001b\u0002\u0161\u0162\u0007\b\u0002\u0002\u0162\u0163\u0005",
    "&\u0014\u0002\u0163\u0165\u0003\u0002\u0002\u0002\u0164\u015f\u0003",
    "\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166\u0003",
    "\u0002\u0002\u0002\u0166\u0167\u0005\u0014\u000b\u0002\u0167\u0168\u0007",
    "\u0007\u0002\u0002\u0168M\u0003\u0002\u0002\u0002\u0169\u016a\u0007",
    "\u0014\u0002\u0002\u016a\u016b\u0007\u0006\u0002\u0002\u016b\u016c\u0005",
    ",\u0017\u0002\u016c\u016d\u00056\u001c\u0002\u016d\u016e\u0007\b\u0002",
    "\u0002\u016e\u016f\u00056\u001c\u0002\u016f\u0170\u0005\u0014\u000b",
    "\u0002\u0170\u0171\u0007\u0007\u0002\u0002\u0171O\u0003\u0002\u0002",
    "\u0002\u0172\u0173\u0007\u0015\u0002\u0002\u0173\u0174\u0007\u0006\u0002",
    "\u0002\u0174\u0175\u0005\u000e\b\u0002\u0175\u0176\u0005\u0014\u000b",
    "\u0002\u0176\u0177\u0007\u0007\u0002\u0002\u0177Q\u0003\u0002\u0002",
    "\u0002\u0178\u0179\u0007\u0016\u0002\u0002\u0179\u017a\u0007\u0006\u0002",
    "\u0002\u017a\u017b\u0005,\u0017\u0002\u017b\u0181\u00056\u001c\u0002",
    "\u017c\u017d\u0007\b\u0002\u0002\u017d\u017e\u00058\u001d\u0002\u017e",
    "\u017f\u0007\b\u0002\u0002\u017f\u0180\u00052\u001a\u0002\u0180\u0182",
    "\u0003\u0002\u0002\u0002\u0181\u017c\u0003\u0002\u0002\u0002\u0181\u0182",
    "\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002\u0002\u0183\u0184",
    "\u0005\u0014\u000b\u0002\u0184\u0185\u0007\u0007\u0002\u0002\u0185S",
    "\u0003\u0002\u0002\u0002\u0186\u0187\u0007\u0017\u0002\u0002\u0187\u0188",
    "\u0007\u0006\u0002\u0002\u0188\u0189\u0005,\u0017\u0002\u0189\u018a",
    "\u00050\u0019\u0002\u018a\u018b\u0007\b\u0002\u0002\u018b\u018c\u0005",
    ":\u001e\u0002\u018c\u018d\u0005\u0014\u000b\u0002\u018d\u018e\u0007",
    "\u0007\u0002\u0002\u018eU\u0003\u0002\u0002\u0002\u018f\u0190\u0007",
    "\u0018\u0002\u0002\u0190\u0191\u0007\u0006\u0002\u0002\u0191\u0192\u0005",
    ",\u0017\u0002\u0192\u0193\u0005:\u001e\u0002\u0193\u0194\u0007\b\u0002",
    "\u0002\u0194\u0197\u0005:\u001e\u0002\u0195\u0196\u0007\b\u0002\u0002",
    "\u0196\u0198\u00054\u001b\u0002\u0197\u0195\u0003\u0002\u0002\u0002",
    "\u0197\u0198\u0003\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0005\u0014\u000b\u0002\u019a\u019b\u0007\u0007\u0002\u0002",
    "\u019bW\u0003\u0002\u0002\u0002\u019c\u019d\u0007\u0019\u0002\u0002",
    "\u019d\u019e\u0007\u0006\u0002\u0002\u019e\u019f\u0005,\u0017\u0002",
    "\u019f\u01a0\u00050\u0019\u0002\u01a0\u01a1\u0007\b\u0002\u0002\u01a1",
    "\u01a9\u00050\u0019\u0002\u01a2\u01a3\u0007\b\u0002\u0002\u01a3\u01a4",
    "\u00054\u001b\u0002\u01a4\u01a5\u0007\b\u0002\u0002\u01a5\u01a6\u0005",
    "@!\u0002\u01a6\u01a7\u0007\b\u0002\u0002\u01a7\u01a8\u0005D#\u0002\u01a8",
    "\u01aa\u0003\u0002\u0002\u0002\u01a9\u01a2\u0003\u0002\u0002\u0002\u01a9",
    "\u01aa\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab",
    "\u01ac\u0005\u0014\u000b\u0002\u01ac\u01ad\u0007\u0007\u0002\u0002\u01ad",
    "Y\u0003\u0002\u0002\u0002\u01ae\u01af\u0007\u001a\u0002\u0002\u01af",
    "\u01b0\u0007\u0006\u0002\u0002\u01b0\u01b1\u0005,\u0017\u0002\u01b1",
    "\u01b2\u00050\u0019\u0002\u01b2\u01b3\u0007\b\u0002\u0002\u01b3\u01b4",
    "\u00050\u0019\u0002\u01b4\u01b5\u0005\u0014\u000b\u0002\u01b5\u01b6",
    "\u0007\u0007\u0002\u0002\u01b6[\u0003\u0002\u0002\u0002\u01b7\u01b8",
    "\u0007\u001b\u0002\u0002\u01b8\u01b9\u0007\u0006\u0002\u0002\u01b9\u01ba",
    "\u00050\u0019\u0002\u01ba\u01bb\u0007\b\u0002\u0002\u01bb\u01bc\u0005",
    "0\u0019\u0002\u01bc\u01bd\u0007\u0007\u0002\u0002\u01bd]\u0003\u0002",
    "\u0002\u0002\u01be\u01bf\u0007\u001c\u0002\u0002\u01bf\u01c0\u0007\u0006",
    "\u0002\u0002\u01c0\u01c1\u00050\u0019\u0002\u01c1\u01c2\u0007\b\u0002",
    "\u0002\u01c2\u01c3\u00050\u0019\u0002\u01c3\u01c4\u0007\u0007\u0002",
    "\u0002\u01c4_\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007\u001d\u0002",
    "\u0002\u01c6\u01c7\u0007\u0006\u0002\u0002\u01c7\u01c8\u0005<\u001f",
    "\u0002\u01c8\u01c9\u0007\b\u0002\u0002\u01c9\u01ca\u00050\u0019\u0002",
    "\u01ca\u01cb\u0007\u0007\u0002\u0002\u01cba\u0003\u0002\u0002\u0002",
    "\u01cc\u01cd\t\u0002\u0002\u0002\u01cd\u01ce\u0007\u0006\u0002\u0002",
    "\u01ce\u01cf\u0005,\u0017\u0002\u01cf\u01d4\u0005d3\u0002\u01d0\u01d1",
    "\u0007\b\u0002\u0002\u01d1\u01d3\u0005d3\u0002\u01d2\u01d0\u0003\u0002",
    "\u0002\u0002\u01d3\u01d6\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5\u01d7\u0003\u0002",
    "\u0002\u0002\u01d6\u01d4\u0003\u0002\u0002\u0002\u01d7\u01d8\u0005\u0014",
    "\u000b\u0002\u01d8\u01d9\u0007\u0007\u0002\u0002\u01d9c\u0003\u0002",
    "\u0002\u0002\u01da\u01e0\u0005.\u0018\u0002\u01db\u01e0\u0005\u001c",
    "\u000f\u0002\u01dc\u01e0\u0005(\u0015\u0002\u01dd\u01e0\u0005b2\u0002",
    "\u01de\u01e0\u0005f4\u0002\u01df\u01da\u0003\u0002\u0002\u0002\u01df",
    "\u01db\u0003\u0002\u0002\u0002\u01df\u01dc\u0003\u0002\u0002\u0002\u01df",
    "\u01dd\u0003\u0002\u0002\u0002\u01df\u01de\u0003\u0002\u0002\u0002\u01e0",
    "e\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007\u001e\u0002\u0002\u01e2",
    "\u01e7\u0005d3\u0002\u01e3\u01e4\u0007\b\u0002\u0002\u01e4\u01e6\u0005",
    "d3\u0002\u01e5\u01e3\u0003\u0002\u0002\u0002\u01e6\u01e9\u0003\u0002",
    "\u0002\u0002\u01e7\u01e5\u0003\u0002\u0002\u0002\u01e7\u01e8\u0003\u0002",
    "\u0002\u0002\u01e8\u01ea\u0003\u0002\u0002\u0002\u01e9\u01e7\u0003\u0002",
    "\u0002\u0002\u01ea\u01eb\u0007\u001f\u0002\u0002\u01eb\u01f8\u0003\u0002",
    "\u0002\u0002\u01ec\u01ed\u0007\u0006\u0002\u0002\u01ed\u01f2\u0005d",
    "3\u0002\u01ee\u01ef\u0007\b\u0002\u0002\u01ef\u01f1\u0005d3\u0002\u01f0",
    "\u01ee\u0003\u0002\u0002\u0002\u01f1\u01f4\u0003\u0002\u0002\u0002\u01f2",
    "\u01f0\u0003\u0002\u0002\u0002\u01f2\u01f3\u0003\u0002\u0002\u0002\u01f3",
    "\u01f5\u0003\u0002\u0002\u0002\u01f4\u01f2\u0003\u0002\u0002\u0002\u01f5",
    "\u01f6\u0007\u0007\u0002\u0002\u01f6\u01f8\u0003\u0002\u0002\u0002\u01f7",
    "\u01e1\u0003\u0002\u0002\u0002\u01f7\u01ec\u0003\u0002\u0002\u0002\u01f8",
    "g\u0003\u0002\u0002\u0002\'jovy\u007f\u0084\u0093\u0098\u00b1\u00be",
    "\u00c6\u00c9\u00d3\u00dd\u00e1\u00eb\u00f2\u00ff\u0107\u010b\u0111\u0115",
    "\u011b\u0125\u012b\u0136\u0146\u0156\u0164\u0181\u0197\u01a9\u01d4\u01df",
    "\u01e7\u01f2\u01f7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'default'", "'prefix'", "'entity'", "'('", "')'",
                     "','", "'['", "']'", "'='", "'%%'", "'activity'", "'wasGeneratedBy'",
                     "';'", "'used'", "'wasStartedBy'", "'wasEndedBy'",
                     "'wasInvalidatedBy'", "'wasInformedBy'", "'agent'",
                     "'wasAssociatedWith'", "'wasAttributedTo'", "'actedOnBehalfOf'",
                     "'wasDerivedFrom'", "'wasInfluencedBy'", "'alternateOf'",
                     "'specializationOf'", "'hadMember'", "'{'", "'}'",
                     "'document'", "'endDocument'", "'bundle'", "'endBundle'",
                     null, null, null, null, "'<'", "'>'", "'.'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, null, null, null, null, null, null,
                      null, null, null, "DOCUMENT", "ENDDOCUMENT", "BUNDLE",
                      "ENDBUNDLE", "WS", "COMMENT", "LINE_COMMENT", "IRI_REF",
                      "LESS", "GREATER", "DOT", "MINUS", "INT_LITERAL",
                      "PREFX", "QUALIFIED_NAME", "HEX", "STRING_LITERAL",
                      "QUALIFIED_NAME_LITERAL", "ECHAR", "STRING_LITERAL2",
                      "STRING_LITERAL_LONG2", "DATETIME", "LANGTAG" ];

var ruleNames =  [ "document", "namespaceDeclarations", "defaultNamespaceDeclaration",
                   "namespaceDeclaration", "namespace", "bundle", "identifier",
                   "expression", "entityExpression", "optionalAttributeValuePairs",
                   "attributeValuePairs", "attributeValuePair", "attribute",
                   "literal", "typedLiteral", "datatype", "convenienceNotation",
                   "activityExpression", "timeOrMarker", "time", "generationExpression",
                   "optionalIdentifier", "identifierOrMarker", "eIdentifier",
                   "eIdentifierOrMarker", "aIdentifierOrMarker", "aIdentifier",
                   "agIdentifierOrMarker", "agIdentifier", "cIdentifier",
                   "gIdentifier", "gIdentifierOrMarker", "uIdentifier",
                   "uIdentifierOrMarker", "usageExpression", "startExpression",
                   "endExpression", "invalidationExpression", "communicationExpression",
                   "agentExpression", "associationExpression", "attributionExpression",
                   "delegationExpression", "derivationExpression", "influenceExpression",
                   "alternateExpression", "specializationExpression", "membershipExpression",
                   "extensibilityExpression", "extensibilityArgument", "extensibilityTuple" ];

function PROV_NParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PROV_NParser.prototype = Object.create(antlr4.Parser.prototype);
PROV_NParser.prototype.constructor = PROV_NParser;

Object.defineProperty(PROV_NParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PROV_NParser.EOF = antlr4.Token.EOF;
PROV_NParser.T__0 = 1;
PROV_NParser.T__1 = 2;
PROV_NParser.T__2 = 3;
PROV_NParser.T__3 = 4;
PROV_NParser.T__4 = 5;
PROV_NParser.T__5 = 6;
PROV_NParser.T__6 = 7;
PROV_NParser.T__7 = 8;
PROV_NParser.T__8 = 9;
PROV_NParser.T__9 = 10;
PROV_NParser.T__10 = 11;
PROV_NParser.T__11 = 12;
PROV_NParser.T__12 = 13;
PROV_NParser.T__13 = 14;
PROV_NParser.T__14 = 15;
PROV_NParser.T__15 = 16;
PROV_NParser.T__16 = 17;
PROV_NParser.T__17 = 18;
PROV_NParser.T__18 = 19;
PROV_NParser.T__19 = 20;
PROV_NParser.T__20 = 21;
PROV_NParser.T__21 = 22;
PROV_NParser.T__22 = 23;
PROV_NParser.T__23 = 24;
PROV_NParser.T__24 = 25;
PROV_NParser.T__25 = 26;
PROV_NParser.T__26 = 27;
PROV_NParser.T__27 = 28;
PROV_NParser.T__28 = 29;
PROV_NParser.DOCUMENT = 30;
PROV_NParser.ENDDOCUMENT = 31;
PROV_NParser.BUNDLE = 32;
PROV_NParser.ENDBUNDLE = 33;
PROV_NParser.WS = 34;
PROV_NParser.COMMENT = 35;
PROV_NParser.LINE_COMMENT = 36;
PROV_NParser.IRI_REF = 37;
PROV_NParser.LESS = 38;
PROV_NParser.GREATER = 39;
PROV_NParser.DOT = 40;
PROV_NParser.MINUS = 41;
PROV_NParser.INT_LITERAL = 42;
PROV_NParser.PREFX = 43;
PROV_NParser.QUALIFIED_NAME = 44;
PROV_NParser.HEX = 45;
PROV_NParser.STRING_LITERAL = 46;
PROV_NParser.QUALIFIED_NAME_LITERAL = 47;
PROV_NParser.ECHAR = 48;
PROV_NParser.STRING_LITERAL2 = 49;
PROV_NParser.STRING_LITERAL_LONG2 = 50;
PROV_NParser.DATETIME = 51;
PROV_NParser.LANGTAG = 52;

PROV_NParser.RULE_document = 0;
PROV_NParser.RULE_namespaceDeclarations = 1;
PROV_NParser.RULE_defaultNamespaceDeclaration = 2;
PROV_NParser.RULE_namespaceDeclaration = 3;
PROV_NParser.RULE_namespace = 4;
PROV_NParser.RULE_bundle = 5;
PROV_NParser.RULE_identifier = 6;
PROV_NParser.RULE_expression = 7;
PROV_NParser.RULE_entityExpression = 8;
PROV_NParser.RULE_optionalAttributeValuePairs = 9;
PROV_NParser.RULE_attributeValuePairs = 10;
PROV_NParser.RULE_attributeValuePair = 11;
PROV_NParser.RULE_attribute = 12;
PROV_NParser.RULE_literal = 13;
PROV_NParser.RULE_typedLiteral = 14;
PROV_NParser.RULE_datatype = 15;
PROV_NParser.RULE_convenienceNotation = 16;
PROV_NParser.RULE_activityExpression = 17;
PROV_NParser.RULE_timeOrMarker = 18;
PROV_NParser.RULE_time = 19;
PROV_NParser.RULE_generationExpression = 20;
PROV_NParser.RULE_optionalIdentifier = 21;
PROV_NParser.RULE_identifierOrMarker = 22;
PROV_NParser.RULE_eIdentifier = 23;
PROV_NParser.RULE_eIdentifierOrMarker = 24;
PROV_NParser.RULE_aIdentifierOrMarker = 25;
PROV_NParser.RULE_aIdentifier = 26;
PROV_NParser.RULE_agIdentifierOrMarker = 27;
PROV_NParser.RULE_agIdentifier = 28;
PROV_NParser.RULE_cIdentifier = 29;
PROV_NParser.RULE_gIdentifier = 30;
PROV_NParser.RULE_gIdentifierOrMarker = 31;
PROV_NParser.RULE_uIdentifier = 32;
PROV_NParser.RULE_uIdentifierOrMarker = 33;
PROV_NParser.RULE_usageExpression = 34;
PROV_NParser.RULE_startExpression = 35;
PROV_NParser.RULE_endExpression = 36;
PROV_NParser.RULE_invalidationExpression = 37;
PROV_NParser.RULE_communicationExpression = 38;
PROV_NParser.RULE_agentExpression = 39;
PROV_NParser.RULE_associationExpression = 40;
PROV_NParser.RULE_attributionExpression = 41;
PROV_NParser.RULE_delegationExpression = 42;
PROV_NParser.RULE_derivationExpression = 43;
PROV_NParser.RULE_influenceExpression = 44;
PROV_NParser.RULE_alternateExpression = 45;
PROV_NParser.RULE_specializationExpression = 46;
PROV_NParser.RULE_membershipExpression = 47;
PROV_NParser.RULE_extensibilityExpression = 48;
PROV_NParser.RULE_extensibilityArgument = 49;
PROV_NParser.RULE_extensibilityTuple = 50;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.DOCUMENT = function() {
    return this.getToken(PROV_NParser.DOCUMENT, 0);
};

DocumentContext.prototype.ENDDOCUMENT = function() {
    return this.getToken(PROV_NParser.ENDDOCUMENT, 0);
};

DocumentContext.prototype.namespaceDeclarations = function() {
    return this.getTypedRuleContext(NamespaceDeclarationsContext,0);
};

DocumentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DocumentContext.prototype.bundle = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BundleContext);
    } else {
        return this.getTypedRuleContext(BundleContext,i);
    }
};

DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitDocument(this);
	}
};




PROV_NParser.DocumentContext = DocumentContext;

PROV_NParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PROV_NParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(PROV_NParser.DOCUMENT);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PROV_NParser.T__0 || _la===PROV_NParser.T__1) {
            this.state = 103;
            this.namespaceDeclarations();
        }

        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME) {
            this.state = 106;
            this.expression();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PROV_NParser.BUNDLE) {
            this.state = 112;
            this.bundle();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PROV_NParser.BUNDLE) {
                this.state = 113;
                this.bundle();
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 121;
        this.match(PROV_NParser.ENDDOCUMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceDeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_namespaceDeclarations;
    return this;
}

NamespaceDeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceDeclarationsContext.prototype.constructor = NamespaceDeclarationsContext;

NamespaceDeclarationsContext.prototype.defaultNamespaceDeclaration = function() {
    return this.getTypedRuleContext(DefaultNamespaceDeclarationContext,0);
};

NamespaceDeclarationsContext.prototype.namespaceDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamespaceDeclarationContext);
    } else {
        return this.getTypedRuleContext(NamespaceDeclarationContext,i);
    }
};

NamespaceDeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterNamespaceDeclarations(this);
	}
};

NamespaceDeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitNamespaceDeclarations(this);
	}
};




PROV_NParser.NamespaceDeclarationsContext = NamespaceDeclarationsContext;

PROV_NParser.prototype.namespaceDeclarations = function() {

    var localctx = new NamespaceDeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PROV_NParser.RULE_namespaceDeclarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.T__0:
            this.state = 123;
            this.defaultNamespaceDeclaration();
            break;
        case PROV_NParser.T__1:
            this.state = 124;
            this.namespaceDeclaration();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PROV_NParser.T__1) {
            this.state = 127;
            this.namespaceDeclaration();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefaultNamespaceDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_defaultNamespaceDeclaration;
    return this;
}

DefaultNamespaceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultNamespaceDeclarationContext.prototype.constructor = DefaultNamespaceDeclarationContext;

DefaultNamespaceDeclarationContext.prototype.IRI_REF = function() {
    return this.getToken(PROV_NParser.IRI_REF, 0);
};

DefaultNamespaceDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterDefaultNamespaceDeclaration(this);
	}
};

DefaultNamespaceDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitDefaultNamespaceDeclaration(this);
	}
};




PROV_NParser.DefaultNamespaceDeclarationContext = DefaultNamespaceDeclarationContext;

PROV_NParser.prototype.defaultNamespaceDeclaration = function() {

    var localctx = new DefaultNamespaceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PROV_NParser.RULE_defaultNamespaceDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(PROV_NParser.T__0);
        this.state = 134;
        this.match(PROV_NParser.IRI_REF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_namespaceDeclaration;
    return this;
}

NamespaceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceDeclarationContext.prototype.constructor = NamespaceDeclarationContext;

NamespaceDeclarationContext.prototype.PREFX = function() {
    return this.getToken(PROV_NParser.PREFX, 0);
};

NamespaceDeclarationContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

NamespaceDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterNamespaceDeclaration(this);
	}
};

NamespaceDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitNamespaceDeclaration(this);
	}
};




PROV_NParser.NamespaceDeclarationContext = NamespaceDeclarationContext;

PROV_NParser.prototype.namespaceDeclaration = function() {

    var localctx = new NamespaceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PROV_NParser.RULE_namespaceDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(PROV_NParser.T__1);
        this.state = 137;
        this.match(PROV_NParser.PREFX);
        this.state = 138;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.IRI_REF = function() {
    return this.getToken(PROV_NParser.IRI_REF, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitNamespace(this);
	}
};




PROV_NParser.NamespaceContext = NamespaceContext;

PROV_NParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PROV_NParser.RULE_namespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(PROV_NParser.IRI_REF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BundleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_bundle;
    return this;
}

BundleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BundleContext.prototype.constructor = BundleContext;

BundleContext.prototype.BUNDLE = function() {
    return this.getToken(PROV_NParser.BUNDLE, 0);
};

BundleContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

BundleContext.prototype.ENDBUNDLE = function() {
    return this.getToken(PROV_NParser.ENDBUNDLE, 0);
};

BundleContext.prototype.namespaceDeclarations = function() {
    return this.getTypedRuleContext(NamespaceDeclarationsContext,0);
};

BundleContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BundleContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterBundle(this);
	}
};

BundleContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitBundle(this);
	}
};




PROV_NParser.BundleContext = BundleContext;

PROV_NParser.prototype.bundle = function() {

    var localctx = new BundleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PROV_NParser.RULE_bundle);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(PROV_NParser.BUNDLE);
        this.state = 143;
        this.identifier();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PROV_NParser.T__0 || _la===PROV_NParser.T__1) {
            this.state = 144;
            this.namespaceDeclarations();
        }

        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME) {
            this.state = 147;
            this.expression();
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 153;
        this.match(PROV_NParser.ENDBUNDLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.PREFX = function() {
    return this.getToken(PROV_NParser.PREFX, 0);
};

IdentifierContext.prototype.QUALIFIED_NAME = function() {
    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitIdentifier(this);
	}
};




PROV_NParser.IdentifierContext = IdentifierContext;

PROV_NParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PROV_NParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        _la = this._input.LA(1);
        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.entityExpression = function() {
    return this.getTypedRuleContext(EntityExpressionContext,0);
};

ExpressionContext.prototype.activityExpression = function() {
    return this.getTypedRuleContext(ActivityExpressionContext,0);
};

ExpressionContext.prototype.generationExpression = function() {
    return this.getTypedRuleContext(GenerationExpressionContext,0);
};

ExpressionContext.prototype.usageExpression = function() {
    return this.getTypedRuleContext(UsageExpressionContext,0);
};

ExpressionContext.prototype.startExpression = function() {
    return this.getTypedRuleContext(StartExpressionContext,0);
};

ExpressionContext.prototype.endExpression = function() {
    return this.getTypedRuleContext(EndExpressionContext,0);
};

ExpressionContext.prototype.invalidationExpression = function() {
    return this.getTypedRuleContext(InvalidationExpressionContext,0);
};

ExpressionContext.prototype.communicationExpression = function() {
    return this.getTypedRuleContext(CommunicationExpressionContext,0);
};

ExpressionContext.prototype.agentExpression = function() {
    return this.getTypedRuleContext(AgentExpressionContext,0);
};

ExpressionContext.prototype.associationExpression = function() {
    return this.getTypedRuleContext(AssociationExpressionContext,0);
};

ExpressionContext.prototype.attributionExpression = function() {
    return this.getTypedRuleContext(AttributionExpressionContext,0);
};

ExpressionContext.prototype.delegationExpression = function() {
    return this.getTypedRuleContext(DelegationExpressionContext,0);
};

ExpressionContext.prototype.derivationExpression = function() {
    return this.getTypedRuleContext(DerivationExpressionContext,0);
};

ExpressionContext.prototype.influenceExpression = function() {
    return this.getTypedRuleContext(InfluenceExpressionContext,0);
};

ExpressionContext.prototype.alternateExpression = function() {
    return this.getTypedRuleContext(AlternateExpressionContext,0);
};

ExpressionContext.prototype.specializationExpression = function() {
    return this.getTypedRuleContext(SpecializationExpressionContext,0);
};

ExpressionContext.prototype.membershipExpression = function() {
    return this.getTypedRuleContext(MembershipExpressionContext,0);
};

ExpressionContext.prototype.extensibilityExpression = function() {
    return this.getTypedRuleContext(ExtensibilityExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitExpression(this);
	}
};




PROV_NParser.ExpressionContext = ExpressionContext;

PROV_NParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PROV_NParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.T__2:
            this.state = 157;
            this.entityExpression();
            break;
        case PROV_NParser.T__10:
            this.state = 158;
            this.activityExpression();
            break;
        case PROV_NParser.T__11:
            this.state = 159;
            this.generationExpression();
            break;
        case PROV_NParser.T__13:
            this.state = 160;
            this.usageExpression();
            break;
        case PROV_NParser.T__14:
            this.state = 161;
            this.startExpression();
            break;
        case PROV_NParser.T__15:
            this.state = 162;
            this.endExpression();
            break;
        case PROV_NParser.T__16:
            this.state = 163;
            this.invalidationExpression();
            break;
        case PROV_NParser.T__17:
            this.state = 164;
            this.communicationExpression();
            break;
        case PROV_NParser.T__18:
            this.state = 165;
            this.agentExpression();
            break;
        case PROV_NParser.T__19:
            this.state = 166;
            this.associationExpression();
            break;
        case PROV_NParser.T__20:
            this.state = 167;
            this.attributionExpression();
            break;
        case PROV_NParser.T__21:
            this.state = 168;
            this.delegationExpression();
            break;
        case PROV_NParser.T__22:
            this.state = 169;
            this.derivationExpression();
            break;
        case PROV_NParser.T__23:
            this.state = 170;
            this.influenceExpression();
            break;
        case PROV_NParser.T__24:
            this.state = 171;
            this.alternateExpression();
            break;
        case PROV_NParser.T__25:
            this.state = 172;
            this.specializationExpression();
            break;
        case PROV_NParser.T__26:
            this.state = 173;
            this.membershipExpression();
            break;
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 174;
            this.extensibilityExpression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntityExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_entityExpression;
    return this;
}

EntityExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityExpressionContext.prototype.constructor = EntityExpressionContext;

EntityExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

EntityExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

EntityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterEntityExpression(this);
	}
};

EntityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitEntityExpression(this);
	}
};




PROV_NParser.EntityExpressionContext = EntityExpressionContext;

PROV_NParser.prototype.entityExpression = function() {

    var localctx = new EntityExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PROV_NParser.RULE_entityExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(PROV_NParser.T__2);
        this.state = 178;
        this.match(PROV_NParser.T__3);
        this.state = 179;
        this.identifier();
        this.state = 180;
        this.optionalAttributeValuePairs();
        this.state = 181;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OptionalAttributeValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_optionalAttributeValuePairs;
    return this;
}

OptionalAttributeValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionalAttributeValuePairsContext.prototype.constructor = OptionalAttributeValuePairsContext;

OptionalAttributeValuePairsContext.prototype.attributeValuePairs = function() {
    return this.getTypedRuleContext(AttributeValuePairsContext,0);
};

OptionalAttributeValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterOptionalAttributeValuePairs(this);
	}
};

OptionalAttributeValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitOptionalAttributeValuePairs(this);
	}
};




PROV_NParser.OptionalAttributeValuePairsContext = OptionalAttributeValuePairsContext;

PROV_NParser.prototype.optionalAttributeValuePairs = function() {

    var localctx = new OptionalAttributeValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PROV_NParser.RULE_optionalAttributeValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PROV_NParser.T__5) {
            this.state = 183;
            this.match(PROV_NParser.T__5);
            this.state = 184;
            this.match(PROV_NParser.T__6);
            this.state = 185;
            this.attributeValuePairs();
            this.state = 186;
            this.match(PROV_NParser.T__7);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_attributeValuePairs;
    return this;
}

AttributeValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeValuePairsContext.prototype.constructor = AttributeValuePairsContext;

AttributeValuePairsContext.prototype.attributeValuePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeValuePairContext);
    } else {
        return this.getTypedRuleContext(AttributeValuePairContext,i);
    }
};

AttributeValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAttributeValuePairs(this);
	}
};

AttributeValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAttributeValuePairs(this);
	}
};




PROV_NParser.AttributeValuePairsContext = AttributeValuePairsContext;

PROV_NParser.prototype.attributeValuePairs = function() {

    var localctx = new AttributeValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PROV_NParser.RULE_attributeValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.T__7:
            break;
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 191;
            this.attributeValuePair();
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PROV_NParser.T__5) {
                this.state = 192;
                this.match(PROV_NParser.T__5);
                this.state = 193;
                this.attributeValuePair();
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeValuePairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_attributeValuePair;
    return this;
}

AttributeValuePairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeValuePairContext.prototype.constructor = AttributeValuePairContext;

AttributeValuePairContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
};

AttributeValuePairContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

AttributeValuePairContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAttributeValuePair(this);
	}
};

AttributeValuePairContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAttributeValuePair(this);
	}
};




PROV_NParser.AttributeValuePairContext = AttributeValuePairContext;

PROV_NParser.prototype.attributeValuePair = function() {

    var localctx = new AttributeValuePairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PROV_NParser.RULE_attributeValuePair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.attribute();
        this.state = 202;
        this.match(PROV_NParser.T__8);
        this.state = 203;
        this.literal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.PREFX = function() {
    return this.getToken(PROV_NParser.PREFX, 0);
};

AttributeContext.prototype.QUALIFIED_NAME = function() {
    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAttribute(this);
	}
};




PROV_NParser.AttributeContext = AttributeContext;

PROV_NParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PROV_NParser.RULE_attribute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        _la = this._input.LA(1);
        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.typedLiteral = function() {
    return this.getTypedRuleContext(TypedLiteralContext,0);
};

LiteralContext.prototype.convenienceNotation = function() {
    return this.getTypedRuleContext(ConvenienceNotationContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitLiteral(this);
	}
};




PROV_NParser.LiteralContext = LiteralContext;

PROV_NParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PROV_NParser.RULE_literal);
    try {
        this.state = 209;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.typedLiteral();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 208;
            this.convenienceNotation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypedLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_typedLiteral;
    return this;
}

TypedLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypedLiteralContext.prototype.constructor = TypedLiteralContext;

TypedLiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(PROV_NParser.STRING_LITERAL, 0);
};

TypedLiteralContext.prototype.datatype = function() {
    return this.getTypedRuleContext(DatatypeContext,0);
};

TypedLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterTypedLiteral(this);
	}
};

TypedLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitTypedLiteral(this);
	}
};




PROV_NParser.TypedLiteralContext = TypedLiteralContext;

PROV_NParser.prototype.typedLiteral = function() {

    var localctx = new TypedLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PROV_NParser.RULE_typedLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(PROV_NParser.STRING_LITERAL);
        this.state = 212;
        this.match(PROV_NParser.T__9);
        this.state = 213;
        this.datatype();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatatypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_datatype;
    return this;
}

DatatypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatatypeContext.prototype.constructor = DatatypeContext;

DatatypeContext.prototype.PREFX = function() {
    return this.getToken(PROV_NParser.PREFX, 0);
};

DatatypeContext.prototype.QUALIFIED_NAME = function() {
    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
};

DatatypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterDatatype(this);
	}
};

DatatypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitDatatype(this);
	}
};




PROV_NParser.DatatypeContext = DatatypeContext;

PROV_NParser.prototype.datatype = function() {

    var localctx = new DatatypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PROV_NParser.RULE_datatype);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        _la = this._input.LA(1);
        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConvenienceNotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_convenienceNotation;
    return this;
}

ConvenienceNotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConvenienceNotationContext.prototype.constructor = ConvenienceNotationContext;

ConvenienceNotationContext.prototype.STRING_LITERAL = function() {
    return this.getToken(PROV_NParser.STRING_LITERAL, 0);
};

ConvenienceNotationContext.prototype.LANGTAG = function() {
    return this.getToken(PROV_NParser.LANGTAG, 0);
};

ConvenienceNotationContext.prototype.INT_LITERAL = function() {
    return this.getToken(PROV_NParser.INT_LITERAL, 0);
};

ConvenienceNotationContext.prototype.QUALIFIED_NAME_LITERAL = function() {
    return this.getToken(PROV_NParser.QUALIFIED_NAME_LITERAL, 0);
};

ConvenienceNotationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterConvenienceNotation(this);
	}
};

ConvenienceNotationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitConvenienceNotation(this);
	}
};




PROV_NParser.ConvenienceNotationContext = ConvenienceNotationContext;

PROV_NParser.prototype.convenienceNotation = function() {

    var localctx = new ConvenienceNotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PROV_NParser.RULE_convenienceNotation);
    var _la = 0; // Token type
    try {
        this.state = 223;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.match(PROV_NParser.STRING_LITERAL);
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PROV_NParser.LANGTAG) {
                this.state = 218;
                this.match(PROV_NParser.LANGTAG);
            }

            break;
        case PROV_NParser.INT_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.match(PROV_NParser.INT_LITERAL);
            break;
        case PROV_NParser.QUALIFIED_NAME_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 222;
            this.match(PROV_NParser.QUALIFIED_NAME_LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActivityExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_activityExpression;
    return this;
}

ActivityExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActivityExpressionContext.prototype.constructor = ActivityExpressionContext;

ActivityExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ActivityExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

ActivityExpressionContext.prototype.timeOrMarker = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TimeOrMarkerContext);
    } else {
        return this.getTypedRuleContext(TimeOrMarkerContext,i);
    }
};

ActivityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterActivityExpression(this);
	}
};

ActivityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitActivityExpression(this);
	}
};




PROV_NParser.ActivityExpressionContext = ActivityExpressionContext;

PROV_NParser.prototype.activityExpression = function() {

    var localctx = new ActivityExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PROV_NParser.RULE_activityExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(PROV_NParser.T__10);
        this.state = 226;
        this.match(PROV_NParser.T__3);
        this.state = 227;
        this.identifier();
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 228;
            this.match(PROV_NParser.T__5);
            this.state = 229;
            this.timeOrMarker();
            this.state = 230;
            this.match(PROV_NParser.T__5);
            this.state = 231;
            this.timeOrMarker();

        }
        this.state = 235;
        this.optionalAttributeValuePairs();
        this.state = 236;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_timeOrMarker;
    return this;
}

TimeOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeOrMarkerContext.prototype.constructor = TimeOrMarkerContext;

TimeOrMarkerContext.prototype.time = function() {
    return this.getTypedRuleContext(TimeContext,0);
};

TimeOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterTimeOrMarker(this);
	}
};

TimeOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitTimeOrMarker(this);
	}
};




PROV_NParser.TimeOrMarkerContext = TimeOrMarkerContext;

PROV_NParser.prototype.timeOrMarker = function() {

    var localctx = new TimeOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PROV_NParser.RULE_timeOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.DATETIME:
            this.state = 238;
            this.time();
            break;
        case PROV_NParser.MINUS:
            this.state = 239;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_time;
    return this;
}

TimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeContext.prototype.constructor = TimeContext;

TimeContext.prototype.DATETIME = function() {
    return this.getToken(PROV_NParser.DATETIME, 0);
};

TimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterTime(this);
	}
};

TimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitTime(this);
	}
};




PROV_NParser.TimeContext = TimeContext;

PROV_NParser.prototype.time = function() {

    var localctx = new TimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PROV_NParser.RULE_time);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(PROV_NParser.DATETIME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GenerationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_generationExpression;
    return this;
}

GenerationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GenerationExpressionContext.prototype.constructor = GenerationExpressionContext;

GenerationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

GenerationExpressionContext.prototype.eIdentifier = function() {
    return this.getTypedRuleContext(EIdentifierContext,0);
};

GenerationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

GenerationExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

GenerationExpressionContext.prototype.timeOrMarker = function() {
    return this.getTypedRuleContext(TimeOrMarkerContext,0);
};

GenerationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterGenerationExpression(this);
	}
};

GenerationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitGenerationExpression(this);
	}
};




PROV_NParser.GenerationExpressionContext = GenerationExpressionContext;

PROV_NParser.prototype.generationExpression = function() {

    var localctx = new GenerationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PROV_NParser.RULE_generationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(PROV_NParser.T__11);
        this.state = 245;
        this.match(PROV_NParser.T__3);
        this.state = 246;
        this.optionalIdentifier();
        this.state = 247;
        this.eIdentifier();
        this.state = 253;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 248;
            this.match(PROV_NParser.T__5);
            this.state = 249;
            this.aIdentifierOrMarker();
            this.state = 250;
            this.match(PROV_NParser.T__5);
            this.state = 251;
            this.timeOrMarker();

        }
        this.state = 255;
        this.optionalAttributeValuePairs();
        this.state = 256;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OptionalIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_optionalIdentifier;
    return this;
}

OptionalIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionalIdentifierContext.prototype.constructor = OptionalIdentifierContext;

OptionalIdentifierContext.prototype.identifierOrMarker = function() {
    return this.getTypedRuleContext(IdentifierOrMarkerContext,0);
};

OptionalIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterOptionalIdentifier(this);
	}
};

OptionalIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitOptionalIdentifier(this);
	}
};




PROV_NParser.OptionalIdentifierContext = OptionalIdentifierContext;

PROV_NParser.prototype.optionalIdentifier = function() {

    var localctx = new OptionalIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, PROV_NParser.RULE_optionalIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 258;
            this.identifierOrMarker();
            this.state = 259;
            this.match(PROV_NParser.T__12);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_identifierOrMarker;
    return this;
}

IdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierOrMarkerContext.prototype.constructor = IdentifierOrMarkerContext;

IdentifierOrMarkerContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterIdentifierOrMarker(this);
	}
};

IdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitIdentifierOrMarker(this);
	}
};




PROV_NParser.IdentifierOrMarkerContext = IdentifierOrMarkerContext;

PROV_NParser.prototype.identifierOrMarker = function() {

    var localctx = new IdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, PROV_NParser.RULE_identifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 263;
            this.identifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 264;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_eIdentifier;
    return this;
}

EIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EIdentifierContext.prototype.constructor = EIdentifierContext;

EIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

EIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterEIdentifier(this);
	}
};

EIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitEIdentifier(this);
	}
};




PROV_NParser.EIdentifierContext = EIdentifierContext;

PROV_NParser.prototype.eIdentifier = function() {

    var localctx = new EIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, PROV_NParser.RULE_eIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EIdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_eIdentifierOrMarker;
    return this;
}

EIdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EIdentifierOrMarkerContext.prototype.constructor = EIdentifierOrMarkerContext;

EIdentifierOrMarkerContext.prototype.eIdentifier = function() {
    return this.getTypedRuleContext(EIdentifierContext,0);
};

EIdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterEIdentifierOrMarker(this);
	}
};

EIdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitEIdentifierOrMarker(this);
	}
};




PROV_NParser.EIdentifierOrMarkerContext = EIdentifierOrMarkerContext;

PROV_NParser.prototype.eIdentifierOrMarker = function() {

    var localctx = new EIdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, PROV_NParser.RULE_eIdentifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 269;
            this.eIdentifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 270;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AIdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_aIdentifierOrMarker;
    return this;
}

AIdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AIdentifierOrMarkerContext.prototype.constructor = AIdentifierOrMarkerContext;

AIdentifierOrMarkerContext.prototype.aIdentifier = function() {
    return this.getTypedRuleContext(AIdentifierContext,0);
};

AIdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAIdentifierOrMarker(this);
	}
};

AIdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAIdentifierOrMarker(this);
	}
};




PROV_NParser.AIdentifierOrMarkerContext = AIdentifierOrMarkerContext;

PROV_NParser.prototype.aIdentifierOrMarker = function() {

    var localctx = new AIdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, PROV_NParser.RULE_aIdentifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 273;
            this.aIdentifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 274;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_aIdentifier;
    return this;
}

AIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AIdentifierContext.prototype.constructor = AIdentifierContext;

AIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAIdentifier(this);
	}
};

AIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAIdentifier(this);
	}
};




PROV_NParser.AIdentifierContext = AIdentifierContext;

PROV_NParser.prototype.aIdentifier = function() {

    var localctx = new AIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PROV_NParser.RULE_aIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AgIdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_agIdentifierOrMarker;
    return this;
}

AgIdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AgIdentifierOrMarkerContext.prototype.constructor = AgIdentifierOrMarkerContext;

AgIdentifierOrMarkerContext.prototype.agIdentifier = function() {
    return this.getTypedRuleContext(AgIdentifierContext,0);
};

AgIdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAgIdentifierOrMarker(this);
	}
};

AgIdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAgIdentifierOrMarker(this);
	}
};




PROV_NParser.AgIdentifierOrMarkerContext = AgIdentifierOrMarkerContext;

PROV_NParser.prototype.agIdentifierOrMarker = function() {

    var localctx = new AgIdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PROV_NParser.RULE_agIdentifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 279;
            this.agIdentifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 280;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AgIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_agIdentifier;
    return this;
}

AgIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AgIdentifierContext.prototype.constructor = AgIdentifierContext;

AgIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AgIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAgIdentifier(this);
	}
};

AgIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAgIdentifier(this);
	}
};




PROV_NParser.AgIdentifierContext = AgIdentifierContext;

PROV_NParser.prototype.agIdentifier = function() {

    var localctx = new AgIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PROV_NParser.RULE_agIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_cIdentifier;
    return this;
}

CIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CIdentifierContext.prototype.constructor = CIdentifierContext;

CIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

CIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterCIdentifier(this);
	}
};

CIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitCIdentifier(this);
	}
};




PROV_NParser.CIdentifierContext = CIdentifierContext;

PROV_NParser.prototype.cIdentifier = function() {

    var localctx = new CIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, PROV_NParser.RULE_cIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_gIdentifier;
    return this;
}

GIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GIdentifierContext.prototype.constructor = GIdentifierContext;

GIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

GIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterGIdentifier(this);
	}
};

GIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitGIdentifier(this);
	}
};




PROV_NParser.GIdentifierContext = GIdentifierContext;

PROV_NParser.prototype.gIdentifier = function() {

    var localctx = new GIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, PROV_NParser.RULE_gIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GIdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_gIdentifierOrMarker;
    return this;
}

GIdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GIdentifierOrMarkerContext.prototype.constructor = GIdentifierOrMarkerContext;

GIdentifierOrMarkerContext.prototype.gIdentifier = function() {
    return this.getTypedRuleContext(GIdentifierContext,0);
};

GIdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterGIdentifierOrMarker(this);
	}
};

GIdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitGIdentifierOrMarker(this);
	}
};




PROV_NParser.GIdentifierOrMarkerContext = GIdentifierOrMarkerContext;

PROV_NParser.prototype.gIdentifierOrMarker = function() {

    var localctx = new GIdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, PROV_NParser.RULE_gIdentifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 289;
            this.gIdentifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 290;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_uIdentifier;
    return this;
}

UIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UIdentifierContext.prototype.constructor = UIdentifierContext;

UIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

UIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterUIdentifier(this);
	}
};

UIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitUIdentifier(this);
	}
};




PROV_NParser.UIdentifierContext = UIdentifierContext;

PROV_NParser.prototype.uIdentifier = function() {

    var localctx = new UIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, PROV_NParser.RULE_uIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UIdentifierOrMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_uIdentifierOrMarker;
    return this;
}

UIdentifierOrMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UIdentifierOrMarkerContext.prototype.constructor = UIdentifierOrMarkerContext;

UIdentifierOrMarkerContext.prototype.uIdentifier = function() {
    return this.getTypedRuleContext(UIdentifierContext,0);
};

UIdentifierOrMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterUIdentifierOrMarker(this);
	}
};

UIdentifierOrMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitUIdentifierOrMarker(this);
	}
};




PROV_NParser.UIdentifierOrMarkerContext = UIdentifierOrMarkerContext;

PROV_NParser.prototype.uIdentifierOrMarker = function() {

    var localctx = new UIdentifierOrMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, PROV_NParser.RULE_uIdentifierOrMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.PREFX:
        case PROV_NParser.QUALIFIED_NAME:
            this.state = 295;
            this.uIdentifier();
            break;
        case PROV_NParser.MINUS:
            this.state = 296;
            this.match(PROV_NParser.MINUS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsageExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_usageExpression;
    return this;
}

UsageExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsageExpressionContext.prototype.constructor = UsageExpressionContext;

UsageExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

UsageExpressionContext.prototype.aIdentifier = function() {
    return this.getTypedRuleContext(AIdentifierContext,0);
};

UsageExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

UsageExpressionContext.prototype.eIdentifierOrMarker = function() {
    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
};

UsageExpressionContext.prototype.timeOrMarker = function() {
    return this.getTypedRuleContext(TimeOrMarkerContext,0);
};

UsageExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterUsageExpression(this);
	}
};

UsageExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitUsageExpression(this);
	}
};




PROV_NParser.UsageExpressionContext = UsageExpressionContext;

PROV_NParser.prototype.usageExpression = function() {

    var localctx = new UsageExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, PROV_NParser.RULE_usageExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(PROV_NParser.T__13);
        this.state = 300;
        this.match(PROV_NParser.T__3);
        this.state = 301;
        this.optionalIdentifier();
        this.state = 302;
        this.aIdentifier();
        this.state = 308;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 303;
            this.match(PROV_NParser.T__5);
            this.state = 304;
            this.eIdentifierOrMarker();
            this.state = 305;
            this.match(PROV_NParser.T__5);
            this.state = 306;
            this.timeOrMarker();

        }
        this.state = 310;
        this.optionalAttributeValuePairs();
        this.state = 311;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StartExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_startExpression;
    return this;
}

StartExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartExpressionContext.prototype.constructor = StartExpressionContext;

StartExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

StartExpressionContext.prototype.aIdentifier = function() {
    return this.getTypedRuleContext(AIdentifierContext,0);
};

StartExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

StartExpressionContext.prototype.eIdentifierOrMarker = function() {
    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
};

StartExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

StartExpressionContext.prototype.timeOrMarker = function() {
    return this.getTypedRuleContext(TimeOrMarkerContext,0);
};

StartExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterStartExpression(this);
	}
};

StartExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitStartExpression(this);
	}
};




PROV_NParser.StartExpressionContext = StartExpressionContext;

PROV_NParser.prototype.startExpression = function() {

    var localctx = new StartExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, PROV_NParser.RULE_startExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.match(PROV_NParser.T__14);
        this.state = 314;
        this.match(PROV_NParser.T__3);
        this.state = 315;
        this.optionalIdentifier();
        this.state = 316;
        this.aIdentifier();
        this.state = 324;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        if(la_===1) {
            this.state = 317;
            this.match(PROV_NParser.T__5);
            this.state = 318;
            this.eIdentifierOrMarker();
            this.state = 319;
            this.match(PROV_NParser.T__5);
            this.state = 320;
            this.aIdentifierOrMarker();
            this.state = 321;
            this.match(PROV_NParser.T__5);
            this.state = 322;
            this.timeOrMarker();

        }
        this.state = 326;
        this.optionalAttributeValuePairs();
        this.state = 327;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EndExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_endExpression;
    return this;
}

EndExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndExpressionContext.prototype.constructor = EndExpressionContext;

EndExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

EndExpressionContext.prototype.aIdentifier = function() {
    return this.getTypedRuleContext(AIdentifierContext,0);
};

EndExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

EndExpressionContext.prototype.eIdentifierOrMarker = function() {
    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
};

EndExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

EndExpressionContext.prototype.timeOrMarker = function() {
    return this.getTypedRuleContext(TimeOrMarkerContext,0);
};

EndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterEndExpression(this);
	}
};

EndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitEndExpression(this);
	}
};




PROV_NParser.EndExpressionContext = EndExpressionContext;

PROV_NParser.prototype.endExpression = function() {

    var localctx = new EndExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, PROV_NParser.RULE_endExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.match(PROV_NParser.T__15);
        this.state = 330;
        this.match(PROV_NParser.T__3);
        this.state = 331;
        this.optionalIdentifier();
        this.state = 332;
        this.aIdentifier();
        this.state = 340;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 333;
            this.match(PROV_NParser.T__5);
            this.state = 334;
            this.eIdentifierOrMarker();
            this.state = 335;
            this.match(PROV_NParser.T__5);
            this.state = 336;
            this.aIdentifierOrMarker();
            this.state = 337;
            this.match(PROV_NParser.T__5);
            this.state = 338;
            this.timeOrMarker();

        }
        this.state = 342;
        this.optionalAttributeValuePairs();
        this.state = 343;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InvalidationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_invalidationExpression;
    return this;
}

InvalidationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvalidationExpressionContext.prototype.constructor = InvalidationExpressionContext;

InvalidationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

InvalidationExpressionContext.prototype.eIdentifier = function() {
    return this.getTypedRuleContext(EIdentifierContext,0);
};

InvalidationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

InvalidationExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

InvalidationExpressionContext.prototype.timeOrMarker = function() {
    return this.getTypedRuleContext(TimeOrMarkerContext,0);
};

InvalidationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterInvalidationExpression(this);
	}
};

InvalidationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitInvalidationExpression(this);
	}
};




PROV_NParser.InvalidationExpressionContext = InvalidationExpressionContext;

PROV_NParser.prototype.invalidationExpression = function() {

    var localctx = new InvalidationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, PROV_NParser.RULE_invalidationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(PROV_NParser.T__16);
        this.state = 346;
        this.match(PROV_NParser.T__3);
        this.state = 347;
        this.optionalIdentifier();
        this.state = 348;
        this.eIdentifier();
        this.state = 354;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 349;
            this.match(PROV_NParser.T__5);
            this.state = 350;
            this.aIdentifierOrMarker();
            this.state = 351;
            this.match(PROV_NParser.T__5);
            this.state = 352;
            this.timeOrMarker();

        }
        this.state = 356;
        this.optionalAttributeValuePairs();
        this.state = 357;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommunicationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_communicationExpression;
    return this;
}

CommunicationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommunicationExpressionContext.prototype.constructor = CommunicationExpressionContext;

CommunicationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

CommunicationExpressionContext.prototype.aIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AIdentifierContext);
    } else {
        return this.getTypedRuleContext(AIdentifierContext,i);
    }
};

CommunicationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

CommunicationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterCommunicationExpression(this);
	}
};

CommunicationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitCommunicationExpression(this);
	}
};




PROV_NParser.CommunicationExpressionContext = CommunicationExpressionContext;

PROV_NParser.prototype.communicationExpression = function() {

    var localctx = new CommunicationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, PROV_NParser.RULE_communicationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.match(PROV_NParser.T__17);
        this.state = 360;
        this.match(PROV_NParser.T__3);
        this.state = 361;
        this.optionalIdentifier();
        this.state = 362;
        this.aIdentifier();
        this.state = 363;
        this.match(PROV_NParser.T__5);
        this.state = 364;
        this.aIdentifier();
        this.state = 365;
        this.optionalAttributeValuePairs();
        this.state = 366;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AgentExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_agentExpression;
    return this;
}

AgentExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AgentExpressionContext.prototype.constructor = AgentExpressionContext;

AgentExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AgentExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

AgentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAgentExpression(this);
	}
};

AgentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAgentExpression(this);
	}
};




PROV_NParser.AgentExpressionContext = AgentExpressionContext;

PROV_NParser.prototype.agentExpression = function() {

    var localctx = new AgentExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, PROV_NParser.RULE_agentExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this.match(PROV_NParser.T__18);
        this.state = 369;
        this.match(PROV_NParser.T__3);
        this.state = 370;
        this.identifier();
        this.state = 371;
        this.optionalAttributeValuePairs();
        this.state = 372;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssociationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_associationExpression;
    return this;
}

AssociationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssociationExpressionContext.prototype.constructor = AssociationExpressionContext;

AssociationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

AssociationExpressionContext.prototype.aIdentifier = function() {
    return this.getTypedRuleContext(AIdentifierContext,0);
};

AssociationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

AssociationExpressionContext.prototype.agIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AgIdentifierOrMarkerContext,0);
};

AssociationExpressionContext.prototype.eIdentifierOrMarker = function() {
    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
};

AssociationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAssociationExpression(this);
	}
};

AssociationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAssociationExpression(this);
	}
};




PROV_NParser.AssociationExpressionContext = AssociationExpressionContext;

PROV_NParser.prototype.associationExpression = function() {

    var localctx = new AssociationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, PROV_NParser.RULE_associationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(PROV_NParser.T__19);
        this.state = 375;
        this.match(PROV_NParser.T__3);
        this.state = 376;
        this.optionalIdentifier();
        this.state = 377;
        this.aIdentifier();
        this.state = 383;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 378;
            this.match(PROV_NParser.T__5);
            this.state = 379;
            this.agIdentifierOrMarker();
            this.state = 380;
            this.match(PROV_NParser.T__5);
            this.state = 381;
            this.eIdentifierOrMarker();

        }
        this.state = 385;
        this.optionalAttributeValuePairs();
        this.state = 386;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributionExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_attributionExpression;
    return this;
}

AttributionExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributionExpressionContext.prototype.constructor = AttributionExpressionContext;

AttributionExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

AttributionExpressionContext.prototype.eIdentifier = function() {
    return this.getTypedRuleContext(EIdentifierContext,0);
};

AttributionExpressionContext.prototype.agIdentifier = function() {
    return this.getTypedRuleContext(AgIdentifierContext,0);
};

AttributionExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

AttributionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAttributionExpression(this);
	}
};

AttributionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAttributionExpression(this);
	}
};




PROV_NParser.AttributionExpressionContext = AttributionExpressionContext;

PROV_NParser.prototype.attributionExpression = function() {

    var localctx = new AttributionExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, PROV_NParser.RULE_attributionExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(PROV_NParser.T__20);
        this.state = 389;
        this.match(PROV_NParser.T__3);
        this.state = 390;
        this.optionalIdentifier();
        this.state = 391;
        this.eIdentifier();
        this.state = 392;
        this.match(PROV_NParser.T__5);
        this.state = 393;
        this.agIdentifier();
        this.state = 394;
        this.optionalAttributeValuePairs();
        this.state = 395;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DelegationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_delegationExpression;
    return this;
}

DelegationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DelegationExpressionContext.prototype.constructor = DelegationExpressionContext;

DelegationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

DelegationExpressionContext.prototype.agIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AgIdentifierContext);
    } else {
        return this.getTypedRuleContext(AgIdentifierContext,i);
    }
};

DelegationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

DelegationExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

DelegationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterDelegationExpression(this);
	}
};

DelegationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitDelegationExpression(this);
	}
};




PROV_NParser.DelegationExpressionContext = DelegationExpressionContext;

PROV_NParser.prototype.delegationExpression = function() {

    var localctx = new DelegationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, PROV_NParser.RULE_delegationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.match(PROV_NParser.T__21);
        this.state = 398;
        this.match(PROV_NParser.T__3);
        this.state = 399;
        this.optionalIdentifier();
        this.state = 400;
        this.agIdentifier();
        this.state = 401;
        this.match(PROV_NParser.T__5);
        this.state = 402;
        this.agIdentifier();
        this.state = 405;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 403;
            this.match(PROV_NParser.T__5);
            this.state = 404;
            this.aIdentifierOrMarker();

        }
        this.state = 407;
        this.optionalAttributeValuePairs();
        this.state = 408;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DerivationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_derivationExpression;
    return this;
}

DerivationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DerivationExpressionContext.prototype.constructor = DerivationExpressionContext;

DerivationExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

DerivationExpressionContext.prototype.eIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EIdentifierContext);
    } else {
        return this.getTypedRuleContext(EIdentifierContext,i);
    }
};

DerivationExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

DerivationExpressionContext.prototype.aIdentifierOrMarker = function() {
    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
};

DerivationExpressionContext.prototype.gIdentifierOrMarker = function() {
    return this.getTypedRuleContext(GIdentifierOrMarkerContext,0);
};

DerivationExpressionContext.prototype.uIdentifierOrMarker = function() {
    return this.getTypedRuleContext(UIdentifierOrMarkerContext,0);
};

DerivationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterDerivationExpression(this);
	}
};

DerivationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitDerivationExpression(this);
	}
};




PROV_NParser.DerivationExpressionContext = DerivationExpressionContext;

PROV_NParser.prototype.derivationExpression = function() {

    var localctx = new DerivationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, PROV_NParser.RULE_derivationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.match(PROV_NParser.T__22);
        this.state = 411;
        this.match(PROV_NParser.T__3);
        this.state = 412;
        this.optionalIdentifier();
        this.state = 413;
        this.eIdentifier();
        this.state = 414;
        this.match(PROV_NParser.T__5);
        this.state = 415;
        this.eIdentifier();
        this.state = 423;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 416;
            this.match(PROV_NParser.T__5);
            this.state = 417;
            this.aIdentifierOrMarker();
            this.state = 418;
            this.match(PROV_NParser.T__5);
            this.state = 419;
            this.gIdentifierOrMarker();
            this.state = 420;
            this.match(PROV_NParser.T__5);
            this.state = 421;
            this.uIdentifierOrMarker();

        }
        this.state = 425;
        this.optionalAttributeValuePairs();
        this.state = 426;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InfluenceExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_influenceExpression;
    return this;
}

InfluenceExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfluenceExpressionContext.prototype.constructor = InfluenceExpressionContext;

InfluenceExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

InfluenceExpressionContext.prototype.eIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EIdentifierContext);
    } else {
        return this.getTypedRuleContext(EIdentifierContext,i);
    }
};

InfluenceExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

InfluenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterInfluenceExpression(this);
	}
};

InfluenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitInfluenceExpression(this);
	}
};




PROV_NParser.InfluenceExpressionContext = InfluenceExpressionContext;

PROV_NParser.prototype.influenceExpression = function() {

    var localctx = new InfluenceExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, PROV_NParser.RULE_influenceExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(PROV_NParser.T__23);
        this.state = 429;
        this.match(PROV_NParser.T__3);
        this.state = 430;
        this.optionalIdentifier();
        this.state = 431;
        this.eIdentifier();
        this.state = 432;
        this.match(PROV_NParser.T__5);
        this.state = 433;
        this.eIdentifier();
        this.state = 434;
        this.optionalAttributeValuePairs();
        this.state = 435;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AlternateExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_alternateExpression;
    return this;
}

AlternateExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlternateExpressionContext.prototype.constructor = AlternateExpressionContext;

AlternateExpressionContext.prototype.eIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EIdentifierContext);
    } else {
        return this.getTypedRuleContext(EIdentifierContext,i);
    }
};

AlternateExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterAlternateExpression(this);
	}
};

AlternateExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitAlternateExpression(this);
	}
};




PROV_NParser.AlternateExpressionContext = AlternateExpressionContext;

PROV_NParser.prototype.alternateExpression = function() {

    var localctx = new AlternateExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, PROV_NParser.RULE_alternateExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this.match(PROV_NParser.T__24);
        this.state = 438;
        this.match(PROV_NParser.T__3);
        this.state = 439;
        this.eIdentifier();
        this.state = 440;
        this.match(PROV_NParser.T__5);
        this.state = 441;
        this.eIdentifier();
        this.state = 442;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SpecializationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_specializationExpression;
    return this;
}

SpecializationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecializationExpressionContext.prototype.constructor = SpecializationExpressionContext;

SpecializationExpressionContext.prototype.eIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EIdentifierContext);
    } else {
        return this.getTypedRuleContext(EIdentifierContext,i);
    }
};

SpecializationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterSpecializationExpression(this);
	}
};

SpecializationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitSpecializationExpression(this);
	}
};




PROV_NParser.SpecializationExpressionContext = SpecializationExpressionContext;

PROV_NParser.prototype.specializationExpression = function() {

    var localctx = new SpecializationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, PROV_NParser.RULE_specializationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 444;
        this.match(PROV_NParser.T__25);
        this.state = 445;
        this.match(PROV_NParser.T__3);
        this.state = 446;
        this.eIdentifier();
        this.state = 447;
        this.match(PROV_NParser.T__5);
        this.state = 448;
        this.eIdentifier();
        this.state = 449;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MembershipExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_membershipExpression;
    return this;
}

MembershipExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MembershipExpressionContext.prototype.constructor = MembershipExpressionContext;

MembershipExpressionContext.prototype.cIdentifier = function() {
    return this.getTypedRuleContext(CIdentifierContext,0);
};

MembershipExpressionContext.prototype.eIdentifier = function() {
    return this.getTypedRuleContext(EIdentifierContext,0);
};

MembershipExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterMembershipExpression(this);
	}
};

MembershipExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitMembershipExpression(this);
	}
};




PROV_NParser.MembershipExpressionContext = MembershipExpressionContext;

PROV_NParser.prototype.membershipExpression = function() {

    var localctx = new MembershipExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, PROV_NParser.RULE_membershipExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(PROV_NParser.T__26);
        this.state = 452;
        this.match(PROV_NParser.T__3);
        this.state = 453;
        this.cIdentifier();
        this.state = 454;
        this.match(PROV_NParser.T__5);
        this.state = 455;
        this.eIdentifier();
        this.state = 456;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtensibilityExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_extensibilityExpression;
    return this;
}

ExtensibilityExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensibilityExpressionContext.prototype.constructor = ExtensibilityExpressionContext;

ExtensibilityExpressionContext.prototype.optionalIdentifier = function() {
    return this.getTypedRuleContext(OptionalIdentifierContext,0);
};

ExtensibilityExpressionContext.prototype.extensibilityArgument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExtensibilityArgumentContext);
    } else {
        return this.getTypedRuleContext(ExtensibilityArgumentContext,i);
    }
};

ExtensibilityExpressionContext.prototype.optionalAttributeValuePairs = function() {
    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
};

ExtensibilityExpressionContext.prototype.PREFX = function() {
    return this.getToken(PROV_NParser.PREFX, 0);
};

ExtensibilityExpressionContext.prototype.QUALIFIED_NAME = function() {
    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
};

ExtensibilityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterExtensibilityExpression(this);
	}
};

ExtensibilityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitExtensibilityExpression(this);
	}
};




PROV_NParser.ExtensibilityExpressionContext = ExtensibilityExpressionContext;

PROV_NParser.prototype.extensibilityExpression = function() {

    var localctx = new ExtensibilityExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, PROV_NParser.RULE_extensibilityExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        _la = this._input.LA(1);
        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 459;
        this.match(PROV_NParser.T__3);
        this.state = 460;
        this.optionalIdentifier();
        this.state = 461;
        this.extensibilityArgument();
        this.state = 466;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 462;
                this.match(PROV_NParser.T__5);
                this.state = 463;
                this.extensibilityArgument();
            }
            this.state = 468;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
        }

        this.state = 469;
        this.optionalAttributeValuePairs();
        this.state = 470;
        this.match(PROV_NParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtensibilityArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_extensibilityArgument;
    return this;
}

ExtensibilityArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensibilityArgumentContext.prototype.constructor = ExtensibilityArgumentContext;

ExtensibilityArgumentContext.prototype.identifierOrMarker = function() {
    return this.getTypedRuleContext(IdentifierOrMarkerContext,0);
};

ExtensibilityArgumentContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExtensibilityArgumentContext.prototype.time = function() {
    return this.getTypedRuleContext(TimeContext,0);
};

ExtensibilityArgumentContext.prototype.extensibilityExpression = function() {
    return this.getTypedRuleContext(ExtensibilityExpressionContext,0);
};

ExtensibilityArgumentContext.prototype.extensibilityTuple = function() {
    return this.getTypedRuleContext(ExtensibilityTupleContext,0);
};

ExtensibilityArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterExtensibilityArgument(this);
	}
};

ExtensibilityArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitExtensibilityArgument(this);
	}
};




PROV_NParser.ExtensibilityArgumentContext = ExtensibilityArgumentContext;

PROV_NParser.prototype.extensibilityArgument = function() {

    var localctx = new ExtensibilityArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, PROV_NParser.RULE_extensibilityArgument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 477;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.state = 472;
            this.identifierOrMarker();
            break;

        case 2:
            this.state = 473;
            this.literal();
            break;

        case 3:
            this.state = 474;
            this.time();
            break;

        case 4:
            this.state = 475;
            this.extensibilityExpression();
            break;

        case 5:
            this.state = 476;
            this.extensibilityTuple();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtensibilityTupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PROV_NParser.RULE_extensibilityTuple;
    return this;
}

ExtensibilityTupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensibilityTupleContext.prototype.constructor = ExtensibilityTupleContext;

ExtensibilityTupleContext.prototype.extensibilityArgument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExtensibilityArgumentContext);
    } else {
        return this.getTypedRuleContext(ExtensibilityArgumentContext,i);
    }
};

ExtensibilityTupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.enterExtensibilityTuple(this);
	}
};

ExtensibilityTupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof PROV_NListener ) {
        listener.exitExtensibilityTuple(this);
	}
};




PROV_NParser.ExtensibilityTupleContext = ExtensibilityTupleContext;

PROV_NParser.prototype.extensibilityTuple = function() {

    var localctx = new ExtensibilityTupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, PROV_NParser.RULE_extensibilityTuple);
    var _la = 0; // Token type
    try {
        this.state = 501;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PROV_NParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 479;
            this.match(PROV_NParser.T__27);
            this.state = 480;
            this.extensibilityArgument();
            this.state = 485;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PROV_NParser.T__5) {
                this.state = 481;
                this.match(PROV_NParser.T__5);
                this.state = 482;
                this.extensibilityArgument();
                this.state = 487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 488;
            this.match(PROV_NParser.T__28);
            break;
        case PROV_NParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 490;
            this.match(PROV_NParser.T__3);
            this.state = 491;
            this.extensibilityArgument();
            this.state = 496;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PROV_NParser.T__5) {
                this.state = 492;
                this.match(PROV_NParser.T__5);
                this.state = 493;
                this.extensibilityArgument();
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 499;
            this.match(PROV_NParser.T__4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PROV_NParser = PROV_NParser;
