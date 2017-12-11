#include "inifile.hh"
#include "parser.hh"
#include <fstream>

inifile_driver::inifile_driver ()
  : trace_scanning (false), trace_parsing (false)
{
	//
}

inifile_driver::~inifile_driver ()
{
}

void inifile_driver::parse (std::istream &in) {
	result = false;
	file = "stream input";
	lexer = new inifileLexer(&in);
        lexer->set_debug(trace_scanning);
	inifile::parser parser (*this);
	parser.set_debug_level (trace_parsing);
	result = parser.parse ();
	delete lexer;
	lexer = 0;
}

void inifile_driver::parse (const std::string &f) {
	result = false;
	file = f;
	std::ifstream in(f.c_str());
	lexer = new inifileLexer(&in);
        lexer->set_debug(trace_scanning);
	inifile::parser parser (*this);
	parser.set_debug_level (trace_parsing);
	result = parser.parse ();
	delete lexer;
	lexer = 0;
	in.close();
}

void inifile_driver::error (const inifile::parser::location_type& l, const std::string& m) {
	std::cerr << l << ": " << m << std::endl;
}

void inifile_driver::error (const std::string& m) {
	std::cerr << m << std::endl;
}

void inifile_driver::append_contents(const header &h, const section &s) {
	contents[h].insert(contents[h].end(), s.begin(), s.end());
}
