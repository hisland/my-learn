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

console.log('o.x is ', o.x);
delete o.x; // 删除成功
console.log('o.x is ', o.x);
