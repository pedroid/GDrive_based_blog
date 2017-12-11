#ifndef INIFILE_HH
# define INIFILE_HH
# include <string>
# include <map>
# include <vector>
# include <utility>
# include "parser.hh"

// Flex expects the signature of yylex to be defined in the macro YY_DECL,
// and the C++ parser expects it to be declared. We can factor both as
// follows.

	// Announce to Flex the prototype we want for lexing function, ...
// # define YY_DECL					\
//      inifile::parser::token_type                         \
//    inifilelex (inifile::parser::semantic_type* yylval,      \
//         inifile::parser::location_type* yylloc,      \
//       inifile_driver& driver)
// 
// 	// ... and declare it for the parser's sake.
// 	YY_DECL;


# define	YY_DECL				\
	inifile::parser::token_type		\
	inifileLexer::lex(			\
		inifile::parser::semantic_type* yylval,	\
		inifile::parser::location_type* yylloc,	\
		inifile_driver& driver)

#ifndef __FLEX_LEXER_H
#include "scanner.hh"
#endif
# include "inifileLexer.hh"

// The driver class is then declared with its most obvious members.

using std::vector;
using std::string;
using std::map;
using std::pair;
using std::make_pair;

	// Conducting the whole scanning and parsing of the inifile
class inifile_driver {

	public:
		inifile_driver ();
		virtual ~inifile_driver ();

		typedef vector<string> values;
		typedef string key;
		typedef pair<key, values> entry;
		typedef vector<entry> section;
		typedef pair<string,string> header;
		typedef map<header, section> sections;

		sections contents;

		void append_contents (const header&,const section&);

	// To encapsulate the coordination with the Flex scanner, it is
	// useful to have two members function to open and close the scanning
	// phase.

	bool trace_scanning;

	// Similarly for the parser itself.

	// Handling the parser.
	void parse (const std::string& f);
	void parse (std::istream& f);
	bool trace_parsing;
	string file;

	// To demonstrate pure handling of parse errors, instead of
	// simply dumping them on the standard error output, we will pass
	// them to the driver using the following two member functions.
	// Finally, we close the class declaration and CPP guard.

	// Error handling.
	void error (const inifile::parser::location_type& l, const string& m);
	void error (const string& m);

	inifileLexer *lexer;
	bool result;
};
#endif // ! INIFILE_HH

