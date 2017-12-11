DATA=/data

PATH=/pkg/bin:/pkg/sbin:/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/usr/usb:/usr/ccs/bin

COPTS= -m64 -mcpu=ultrasparc

.PHONY:	all

all: validate update-individual-policy combine-multiple-policies

validate: validate.o scanner.o inifile.o parser.o dump.o
	g++ $(COPTS) -o "$@" $^

update-individual-policy: update-individual-policy.o scanner.o inifile.o parser.o dump.o
	g++ $(COPTS) -o "$@" $^

combine-multiple-policies: combine-multiple-policies.o scanner.o inifile.o parser.o dump.o
	g++ $(COPTS) -o "$@" $^

scanner.hh scanner.cc: scanner.l
	#flex --outfile=scanner.cc  $^
	flex --header-file=scanner.hh --outfile=scanner.cc  $^

scanner.o: scanner.cc parser.hh inifile.hh inifileLexer.hh
	g++ $(COPTS) -c $<

parser.cc parser.hh position.hh location.hh stack.hh: parser.yy
	bison -o parser.cc $<

parser.o: parser.cc parser.hh inifile.hh scanner.hh inifileLexer.hh
	g++ $(COPTS) -c $<

inifile.o: inifile.cc inifile.hh parser.hh scanner.hh inifileLexer.hh
	g++ $(COPTS) -c $<

validate.o: validate.cc inifile.hh parser.hh scanner.hh inifileLexer.hh dump.hh
	g++ $(COPTS) -c $<

dump.o: dump.cc dump.hh inifile.hh
	g++ $(COPTS) -c $<

update-individual-policy.o: update-individual-policy.cc inifile.hh parser.hh scanner.hh inifileLexer.hh dump.hh
	g++ $(COPTS) -c $<

combine-multiple-policies.o: combine-multiple-policies.cc inifile.hh parser.hh scanner.hh inifileLexer.hh dump.hh
	g++ $(COPTS) -c $<

.PHONY:	clean

clean:
	-rm validate
	-rm update-individual-policy combine-multiple-policies
	-rm scanner.cc scanner.hh
	-rm parser.cc parser.hh position.hh location.hh stack.hh
	-rm inifile.o parser.o validate.o scanner.o dump.o
	-rm update-individual-policy.o combine-multiple-policies.o

.PHONY:	test

test:	validate
	./validate validate-test
	./validate policy

.PHONY: install

install: all
	sudo cp update-individual-policy /data/svn/scripts
	sudo cp combine-multiple-policies /data/svn/scripts
