require('@babel/register');

// 我后面所有引入的文件都可以是es6语法了
// 官方文档说的是 The require hook will bind itself to node’s require and automatically compile files on the fly.

var bb = require('./bb');

console.log(bb);
