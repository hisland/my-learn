var z = require('./0'); // 0 还不能是 es6语法
var a = require('./a'); // a 里面有 require('babel-register'); 之后的都可以是es6
var c = require('./c'); // es6

console.log(z);
console.log(a);
console.log(c);
