import {
  b
} from './a'
import {
  b2
} from './a'
import {
  c
} from './a'

var x = b;

console.log(1, b(123));
console.log(1, x(123));
console.log(1, b2(123));
console.log(1, c(123));


setTimeout(function() {
  console.log(2, b(123)); // 基于es6的,引用自动更正了
  console.log(2, x(123)); // 内部保存的引用, 不会更新
  console.log(2, b2(123));
  console.log(2, c(123)); // 手工设置了exports的也正确了
}, 20);
