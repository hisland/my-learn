console.log('main starting')
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done)


// app > a > b > a 测试了循环引用的初始化执行顺序
