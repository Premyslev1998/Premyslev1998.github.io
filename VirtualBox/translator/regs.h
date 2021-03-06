﻿#pragma once

#include <string>
#include <map>

typedef std::map<std::string,unsigned> Regs;

class Registers
{
public:
	Registers();
	bool isReg(const std::string &str);				// Проверка, является ли целым регистром
	bool isRegFloat(const std::string &str);		// Проверка, является ли дробным регистром
	unsigned getReg(const std::string &str);		// Возвращает номер целого регистра
	unsigned getRegFloat(const std::string &str);	// Возвращает номер дробного регистра
private:
	Regs regs,regsFloat;
	void initRegs();
	void initRegsFloat();
};
