let fn1 = (aa, bb, cc) => aa + bb + cc;

let rs1 = fn1(2, 3, 4);
let rs2 = 2->fn1(3, 4);

print_endline(rs1->string_of_int);
print_endline(rs2->string_of_int);
