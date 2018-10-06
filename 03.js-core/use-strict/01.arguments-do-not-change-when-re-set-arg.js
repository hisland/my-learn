function f1(a) {　　　　
  a = 2;　　　　
  return [a, arguments[0]];　　
}
console.log(f1(1), '正常模式为[2,2]');

function f2(a) {　　　　
  "use strict";　　　　
  a = 2;　　　　
  return [a, arguments[0]];　　
}　　
console.log(f2(1), '严格模式为[2,1]');
