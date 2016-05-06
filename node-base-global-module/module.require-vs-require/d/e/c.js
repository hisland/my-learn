console.log('require me : d/e/c');

var e = require('../eee');

var x = require('./x') // 从自己所在的路径导入x

var x1 = e.module.require('./e/x') // 从eee所在的路径导入x

console.log(x === x1); // 它们实际是同一个模块
