#ifndef DUMP_HH
#define DUMP_HH "dump.hh"

void dump_entries(std::ostream& out, const string& header, inifile_driver::section &section);

void dump_entry(std::ostream& out, inifile_driver::entry &entry);

void dump_vector(std::ostream& out, std::vector<std::string> &v);

#endif
