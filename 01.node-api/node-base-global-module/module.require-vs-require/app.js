var a = require('./a/b/a');
var b = require('./c/b');
var c = require('./d/e/c');
var e = require('./e');


console.log('module.require === require', module.require === require);
console.log('module.require , require 不是同一个东西');
console.log('require 始终相对于当前file, 不管是file-module, dir-module');

// 查看 ./d/eee, ./d/e/c 示例
console.log('module.require 始终相对于那个module, 需要导出module引用给其它模块才能使用');
