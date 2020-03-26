mov %num1 ah
int 11
mov%num2 ah
int 11
int 10
.space 20
num1:
.short 42
num2:
.short -1989