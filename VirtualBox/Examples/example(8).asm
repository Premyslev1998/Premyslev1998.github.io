mov 0 bh
start:
int 13
push ah
add 1 bh
cmp 4 bh
jne start
sub 8 sp
mov sp ah
add 6 ah
int 11
int 10