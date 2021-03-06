// Generated from grammar/SingleToken.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SingleTokenListener = require('./SingleTokenListener').SingleTokenListener;
var grammarFileName = "SingleToken.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0003\u000b\u0004\u0002\t\u0002\u0003\u0002\u0007\u0002\u0006",
    "\n\u0002\f\u0002\u000e\u0002\t\u000b\u0002\u0003\u0002\u0002\u0002\u0003",
    "\u0002\u0002\u0002\n\u0002\u0007\u0003\u0002\u0002\u0002\u0004\u0006",
    "\u0007\u0003\u0002\u0002\u0005\u0004\u0003\u0002\u0002\u0002\u0006\t",
    "\u0003\u0002\u0002\u0002\u0007\u0005\u0003\u0002\u0002\u0002\u0007\b",
    "\u0003\u0002\u0002\u0002\b\u0003\u0003\u0002\u0002\u0002\t\u0007\u0003",
    "\u0002\u0002\u0002\u0003\u0007"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'token'" ];

var symbolicNames = [ null, "TOKEN" ];

var ruleNames =  [ "start" ];

function SingleTokenParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SingleTokenParser.prototype = Object.create(antlr4.Parser.prototype);
SingleTokenParser.prototype.constructor = SingleTokenParser;

Object.defineProperty(SingleTokenParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SingleTokenParser.EOF = antlr4.Token.EOF;
SingleTokenParser.TOKEN = 1;

SingleTokenParser.RULE_start = 0;

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SingleTokenParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.TOKEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SingleTokenParser.TOKEN);
    } else {
        return this.getToken(SingleTokenParser.TOKEN, i);
    }
};


StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SingleTokenListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SingleTokenListener ) {
        listener.exitStart(this);
	}
};




SingleTokenParser.StartContext = StartContext;

SingleTokenParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SingleTokenParser.RULE_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SingleTokenParser.TOKEN) {
            this.state = 2;
            this.match(SingleTokenParser.TOKEN);
            this.state = 7;
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


exports.SingleTokenParser = SingleTokenParser;
