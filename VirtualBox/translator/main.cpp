#include "misc.h"
#include "regs.h"
#include "memory.h"
#include "analyzer.h"
#include "labels.h"

//------------------------------------------------------------------------------------------
int main(int argc, char **argv)
{
	//В след. условии мы принимаем на вход файл с кодом, написанном
	//на импр-ом языке ассемблера. 	
	if (argc<2) 
		{
		std::cout << "usage:\n    vavagatr filename.asm\n    vavagatr filename.asm -d\n\n";
		exit(1);
		}
	bool debug=false;
	
	
	if (argc==3)
	{
		std::string arg=argv[2];
		if (arg=="-d")
			debug=true;
	}
	
	Registers registers;
	Memory memory(&registers);
	Label label(&memory);
	Analyzer analyzer(&memory,&registers,&label);
	analyzer.loadSyntax("../params/opcodes.cfg");
	analyzer.load(argv[1]);
	analyzer.process();
	if (debug)
		{
		memory.print();
		}
	//Ниже мы создаем файл в котором будет содержаться исполняемый код
	//в двоичном виде. 	
	memory.save("../demo/program.ve");
	system("pause");
    return 0;
}
