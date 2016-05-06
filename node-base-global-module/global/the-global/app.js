// console.log(global); // global ns

var abc = 123; // 不同于浏览器(浏览器中这样相当于设置window.abc = 123)
console.log(abc);
console.log(global.abc); // undefined


global = {woo: 'hoo'}; // 丢失了 global 引用
console.log(global);
