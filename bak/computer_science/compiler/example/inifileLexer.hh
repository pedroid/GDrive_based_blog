#ifndef INIFILE_LEXER_HH
# define INIFILE_LEXER_HH

#ifndef YY_DECL

# define	YY_DECL				\
	inifile::parser::token_type		\
	inifileLexer::lex(			\
		inifile::parser::semantic_type* yylval,	\
		inifile::parser::location_type* yylloc,	\
		inifile_driver& driver)

#endif

class inifileLexer : public yyFlexLexer {
	public:
        inifileLexer( FLEX_STD istream* arg_yyin = 0,
		FLEX_STD ostream* arg_yyout = 0 );

        virtual ~inifileLexer();

	virtual inifile::parser::token_type lex(
		inifile::parser::semantic_type* yylval,
		inifile::parser::location_type* yylloc,
		inifile_driver& driver);

	void set_debug(bool b);
};
#undef yylex
#define yylex driver.lexer->lex
#endif // ! INIFILE_LEXER_HH

