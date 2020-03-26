mov 0 bh
start:
int 13
push ah
add 1 bh
cmp 5 bh
jne start
mov 0 bh
loop2:
pop ah
int 11
add 1 bh
cmp 5 bh
jne loop2
int 10