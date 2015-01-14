"use strict";　　
var x = 3;　　
console.log('x is ', x);
delete x; // 语法错误
console.log('x is ', x);
　　
var o = Object.create(null, {
  'x': {　　　　　　
    value: 1,
    　　　　　　configurable: true　　
  }
});　　
delete o.x; // 删除成功
