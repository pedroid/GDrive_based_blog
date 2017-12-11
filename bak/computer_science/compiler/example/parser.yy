%skeleton "lalr1.cc"
%require "2.3"
%defines
%define "parser_class_name" "parser"
%name-prefix="inifile"

%{
	# include <string>
	# include <vector>
	class inifile_driver;
%}

// The parsing context.
%parse-param { inifile_driver& driver }
%lex-param   { inifile_driver& driver }

%locations
%initial-action
{
	// Initialize the initial location.
	@$.begin.filename = @$.end.filename = &driver.file;
};

// Use the two following directives to enable parser tracing and
// verbose error messages.

%debug
%error-verbose

// Semantic values cannot use _real_ objects, but only pointers to them.

// Symbols.
%union
{
	typedef std::string		str;
	str				*sval;
	typedef std::vector<str>	_values;
	_values				*vals;
	typedef std::pair<str,_values>	_entry;
	_entry				*entry;
	typedef std::vector<_entry>	_section;
	_section			*section;
	typedef std::pair<str,str>	_header;
	_header				*header;
};

// The code between `%{' and `%}' after the introduction of the `%union'
// is output in the *.cc file; it needs detailed knowledge about the driver.

%{
	# include "inifile.hh"
%}

// The token numbered as 0 corresponds to end of file; the following
// line allows for nicer error messages referring to _end of file_
// instead of _$end_. Similarly user friendly named are provided for
// each symbol. Note that the tokens names are prefixed by TOKEN_
// to avoid name clashes.

%token        END	0	"end of file"
%token        EOL		"end of line"
%token        ASSIGN		"="
%token        LEFT		"["
%token        RIGHT		"]"
%token        COLON		":"
%token        AT		"@"
%token        COMMA		","
%type  <header> header		"section header"
%type  <section> entries	"section contents"
%type  <entry> entry		"entry"
%type  <vals> values		"value list"
%type  <sval> value		"value"
%token <sval> ID		"identifier"
%token <sval> PATH		"path"

// To enable memory deallocation during error recovery, use %destructor.

// %printer    { debug_stream () << *$$; } "identifier"
%destructor { delete $$; } ID PATH value values entry entries header
     
// %printer    { debug_stream () << $$; } "number" "expression"

%%

%start file;
file:		blanks sections;

sections:	// empty
	| 	sections section
	;

blanks:		// empty
	|	blanks EOL
	;

section:	header entries		{ driver.append_contents(
						*$1, *$2); }
	;

header:		"[" ID "]" EOL		{ $$ = new pair<string,string>(
						*$2, ""); }
	|	"[" ID ":" PATH "]" EOL
					{ $$ = new pair<string,string>(
						*$2, *$4); }
	|	"[" PATH "]" EOL	{ $$ = new pair<string,string>(
						"", *$2); }
	;

entries:	/* empty */		{ $$ = new inifile_driver::section(); }
	|	entries blanks entry blanks
					{ $$ = $1; $$->push_back(*$3); }
	;

entry:		value "=" values EOL	{ $$ = new pair<string,vector<string> >(
						*$1, *$3); }
	;

values:		/* empty */		{ $$ = new vector<string>(); }
	|	values COMMA value	{ $$ = $1; $$->push_back(*$3); }
	|	value			{ $$ = new vector<string>();
					  $$->push_back(*$1); }
	;

value:		ID			{ $$ = $1; }
	|	AT ID			{ $$ = new string(string("@") + *$2); }
	;

%%

void inifile::parser::error (
	const inifile::parser::location_type& l, const std::string& m)
{
	driver.error (l, m);
}

