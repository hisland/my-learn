// 参数默认值

function test(a = 'test', b = 'halo', c = 'cc') {
  console.log(a, b, c);
}
test();
test(1);
test(1, 2);
test(1, 2, 3);
