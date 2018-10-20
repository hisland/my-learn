let fn1 = (aa, bb, cc) => aa + bb + cc;

let fn2 = 2->fn1;

let fn3 = 3->fn2;

let rs1 = 4->fn3;

print_endline(rs1->string_of_int);
