mov info ah //переносим в ah содерж., леж по адресу (объявл. ниже) метки - info
int 18 //вывод текста, леж по заданному адресу (c перех. на след. строчку) 
mov str1 ah //клад. адрес метки str1 в регистр - ah (кол-во элементов)
int 15 //вывод текста, леж по заданному адресу (без перех. на след. строчку)
int 13 //запраш. (ввод.) число
mov ah ch //помещ. число в ch
mov 0 bh //пом. в bh 0 
mov 0 dh //...
begin: //begin - орг. цикл
add 1 bh //увел. bh на 1-цу каждый раз
mov str2 ah //клад. в ah адрес строки - str2
int 15 //...
int 16 //...
cmp ah dh //произв. сравнение 2-ух регистров
//если ah <= dh, переходим на метку cont:, в противном случ. мы переносим число из ah в dh (см. 18-ую строчку)
jl cont //произв. скачек на указ. метку (cont), если ah <= dh 
mov ah dh
cont:
cmp ch bh //Проверка закрытия/прододжения цикла
jne begin
mov str3 ah
int 15
mov dh ah
int 11
int 10
info:
.string Max element //Поясн. параметр
str1:
.string Input elements count:
str2:
.string Input number:
str3:
.string Biggest number:

