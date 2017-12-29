console.log('解构数组');
var arr = ['god', 'help', 'me'];

var [a, b, c] = arr; // 将对应位置的值 解构到相应的变量

console.log(arr);
console.log(a, b, c);


console.log('解构对象');
var obj = {
  d: 'd: god',
  e: 'e: help',
  f: 'f: me'
};

var {
  d, e, f
} = obj; // 将对应位置的值 解构到相应的变量

console.log(obj);
console.log(d, e, f);


console.log('解构默认值');
var cc = {
  kk: 1
};
var {
  des = "default value", kk
} = cc;

console.log(des, kk);


console.log('解构 for of');
var map = new Map();
map.set('a', 'value a');
map.set('b', 'value b');
map.set('c', 'value c');
for (var [key, value] of map) {
  console.log(key, value);
}
