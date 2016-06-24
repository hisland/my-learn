var c = require('./b/c');
console.log('模块间的global是同一个对象', global === c.aa);
console.log('this === exports: ', this === exports);

console.log(console === global.console);
// console.log(Object.getOwnPropertyNames(module).sort());
// console.log(__filename);
// console.log(__dirname);
// console.log(module);
// console.log(require);
// console.log(exports);
