#include "regs.h"

Registers::Registers()
{
	initRegs();
	initRegsFloat();
}

//В следующих 2-ух функциях мы устанавливаем соответствие между
//текстовым значением регистра и его номером, иными словами инициализируем
//регистры.
//Замечание!
//Это требуется для того чтобы компилятор мог преобразовать буквенные
//обозначения (на языке ассемблера), в числовые.
//Само преобразование будет осуществляться путем обращения к массиву.  
//------------------------------------------------------------------------------------------
void Registers::initRegs()
{
    regs["ah"]=0;
    regs["bh"]=1;
    regs["ch"]=2;
    regs["dh"]=3;
    regs["eh"]=4;
    regs["sp"]=5;
    regs["pc"]=6;
    regs["rh"]=7;
}

//------------------------------------------------------------------------------------------
void Registers::initRegsFloat()
{
    regsFloat["eax"]=0;
    regsFloat["ebx"]=1;
    regsFloat["ecx"]=2;
    regsFloat["edx"]=3;
    regsFloat["eex"]=4;
    regsFloat["esp"]=5;
}

//------------------------------------------------------------------------------------------
bool Registers::isReg(const std::string &str)
{
	return regs.find(str)!=regs.end();
}

//------------------------------------------------------------------------------------------
bool Registers::isRegFloat(const std::string &str)
{
	return regsFloat.find(str)!=regsFloat.end();
}

//------------------------------------------------------------------------------------------
unsigned Registers::getReg(const std::string &str)
{
	return regs[str];
}

//------------------------------------------------------------------------------------------
unsigned Registers::getRegFloat(const std::string &str)
{
	return regsFloat[str];
}
