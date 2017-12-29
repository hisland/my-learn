// 变量直接作为属性

var foo = 'bar';
var baz = {foo};
console.log(baz); // {foo: "bar"}

// 等同于
var baz = {foo: foo};


function f(x, y) {
  return {x, y}; // 返回对象
}

// 等同于

function f(x, y) {
  return {x: x, y: y};
}

console.log(f(1, 2)); // Object {x: 1, y: 2}
