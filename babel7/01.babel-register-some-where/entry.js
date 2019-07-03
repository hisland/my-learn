const aa = require('./0.no-register.js'); // 0 还不能是 es6语法
const bb = require('./1.has-register.js'); // a 里面有 require('@babel/register'); 之后的都可以是es6
const cc = require('./2.es-module-1.js'); // es6

console.log(aa);
console.log(bb);
console.log(cc);
