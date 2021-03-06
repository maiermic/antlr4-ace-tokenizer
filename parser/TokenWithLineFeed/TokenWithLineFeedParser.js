// Generated from grammar/TokenWithLineFeed.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TokenWithLineFeedListener = require('./TokenWithLineFeedListener').TokenWithLineFeedListener;
var grammarFileName = "TokenWithLineFeed.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0003\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0005\u0002\u0004\u0003\u0002",
    "\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0003\u0003\u0002",
    "\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "COMMENT" ];

var ruleNames =  [ "start" ];

function TokenWithLineFeedParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TokenWithLineFeedParser.prototype = Object.create(antlr4.Parser.prototype);
TokenWithLineFeedParser.prototype.constructor = TokenWithLineFeedParser;

Object.defineProperty(TokenWithLineFeedParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TokenWithLineFeedParser.EOF = antlr4.Token.EOF;
TokenWithLineFeedParser.COMMENT = 1;

TokenWithLineFeedParser.RULE_start = 0;

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TokenWithLineFeedParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.COMMENT = function() {
    return this.getToken(TokenWithLineFeedParser.COMMENT, 0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof TokenWithLineFeedListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof TokenWithLineFeedListener ) {
        listener.exitStart(this);
	}
};




TokenWithLineFeedParser.StartContext = StartContext;

TokenWithLineFeedParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TokenWithLineFeedParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(TokenWithLineFeedParser.COMMENT);
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


exports.TokenWithLineFeedParser = TokenWithLineFeedParser;
