/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
#include "misc.h"
#include "regs.h" //в данном файле мы заносим номера регистров
#include "memory.h"
#include "analyzer.h" //в данном файле, мы будем "читать" команды из файла
//program.asm и генерировать для них о/п-коды.
#include "labels.h"

//------------------------------------------------------------------------------------------
//В данной ф-ии (main), мы считываем код, который описан в файле с разрешением asm, и далее
//преобразуем его в байт-код и помещаем в файл, с разрешением ve.     
int main(int argc, char **argv)
{
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
	memory.save("../demo/program.ve");
    return 0;
}
