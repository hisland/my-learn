var a = require('./a');

// 一次启动, 整个依赖链上的module里面的 process变量 都指向同一对象

console.log('in app: process.abc: ', process.abc);
console.log('in app: process.def: ', process.def);
