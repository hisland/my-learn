'use strict';
// 属性可以是变量/表达式

let propKey = 'foo';
let foo = 'pk';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123,
  ['h'+'ello']() {
    return 'hi';
  }
  // ,[foo] // 不可以这样混合 表达式和简洁属性
};

console.log(obj.foo);
console.log(obj.abc);
console.log(obj.hello());

