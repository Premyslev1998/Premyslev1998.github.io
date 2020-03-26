mov ah ch
mov 0 bh
mov 0 dh
begin:
add 1 bh
mov str2 ah
int 15
int 13
cmp ah dh
jl cont
mov ah dh
cont:
cmp ch bh
jne begin
mov str3 ah
int 15
mov dh ah
int 11
int 10

#include ../demo/data.asm