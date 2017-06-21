// use folder name
var a = require('./a')
console.log(a);

console.log('优先记取的package.json指定的模块');
console.log('package.json无有效main,则继续读取index.js');
