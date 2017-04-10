
var iamGlobal = 333;
iamGlobal2 = 444;

console.log(iamGlobal2)

console.log('相当于全局脚本, 不是 cmd 模块, exports 就报错')
exports.aa = 3;
