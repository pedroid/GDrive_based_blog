	// The Flex scanner first includes the driver declaration, then the
	// parser's to get the set of defined tokens.

%{
	# include <cstdlib>
	# include <errno.h>
	# include <limits.h>
	# include <string>
	# include "inifile.hh"
	# include "parser.hh"

	/* Work around an incompatibility in flex (at least versions
	   2.5.31 through 2.5.33): it generates code that does
	   not conform to C89.  See Debian bug 333231
	   <http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=333231>.  */
	// # undef yywrap
	// # define yywrap() 1

	/* By default yylex returns int, we use token_type.
	   Unfortunately yyterminate by default returns 0, which is
	   not of token_type.  */
	#define yyterminate() return token::END
%}

	// Because there is no #include-like feature we don't need yywrap, we
	// don't need unput either, and we parse an actual file, this is not an
	// interactive session with the user. Finally we enable the scanner
	// tracing features.

%option noyywrap nounput batch debug c++ yylineno

	// Abbreviations allow for more readable rules.

id	[a-zA-Z_][a-zA-Z_0-9\.@-]*
blank	[ \t]
comment	#.*
continuation	{blank}*\\{eol}
eol	{blank}*{comment}?\n
fname	[[:alnum:]!"$%^&()_=+{}:;,.#~@\'\`|\\-]+
dir	\/{fname}
path	{dir}+\/?|\/

	// The following paragraph suffices to track locations accurately.
	// Each time yylex is invoked, the begin position is moved onto the
	// end position. Then when a pattern is matched, the end position is
	// advanced of its width. In case it matched ends of lines, the end
	// cursor is adjusted, and each time blanks are matched, the begin
	// cursor is moved onto the end cursor to effectively ignore the
	// blanks preceding tokens. Comments would be treated equally.

%{
	# define YY_USER_ACTION  yylloc->columns (yyleng);
%}

%%

%{
	yylloc->step ();
%}

{blank}+	yylloc->step ();

	/*
	// The rules are simple, just note the use of the driver to report
	// errors. It is convenient to use a typedef to shorten
	// inifile::parser::token::identifier into token::identifier
	// for instance.
	*/

%{
	typedef inifile::parser::token token;
%}

{continuation}	yylloc->lines(1);

{eol}	yylloc->lines(1); return token::EOL;

	/* Convert ints to the actual type of tokens.  */
\[	return token::LEFT;
\]	return token::RIGHT;
=	return token::ASSIGN;
:	return token::COLON;
@	return token::AT;
,	return token::COMMA;

{id}	yylval->sval = new std::string (yytext); return token::ID;
\*	yylval->sval = new std::string (yytext); return token::ID;
{path}	yylval->sval = new std::string (yytext); return token::PATH;
.	driver.error ("invalid character");
%%

inifileLexer :: inifileLexer(
		FLEX_STD istream* arg_yyin,
		FLEX_STD ostream* arg_yyout ) :
	yyFlexLexer(arg_yyin, arg_yyout)
	{}

inifileLexer:: ~inifileLexer() {}

void inifileLexer::set_debug(bool b)
{
	yy_flex_debug = b;
}

#ifdef yylex
#undef yylex
#endif
int yyFlexLexer::yylex() {
	std::cerr <<
		"in yyFlexLexer::yylex() !" <<
		std::endl;
	return 0;
}

/*
inifile::parser::token_type inifileLexer::lex(
		inifile::parser::semantic_type* yylval,
		inifile::parser::location_type* yylloc,
		inifile_driver& driver)
{
	std::cerr <<
		"in inifileLexer::lex() !" <<
		std::endl;
}

*/
