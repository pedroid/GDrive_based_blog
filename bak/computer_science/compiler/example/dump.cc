#include <iostream>
#include "inifile.hh"
#include "dump.hh"

void dump_entries(std::ostream& out, const string& header, inifile_driver::section &section) {
	out << "[" << header << "]" << std::endl;

	for (inifile_driver::section::iterator i =
		section.begin();
		i != section.end();
		++i)
	{
		dump_entry(out, *i);
	}

	out << std::endl;
}

void dump_entry(std::ostream& out, inifile_driver::entry &entry) {
	out << entry.first << " = ";
	dump_vector(out, entry.second);
	out << std::endl;
}

void dump_vector(std::ostream& out, std::vector<std::string> &v) {
	bool next = false;
	for (vector<string>::const_iterator i = v.begin();
		i != v.end();
		++i)
	{
		if (next) out << ", ";
		out << *i;
		next = true;
	}
}

