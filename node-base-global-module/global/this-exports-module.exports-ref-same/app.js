exports.a = 123;
exports.b = 123;

console.log(this); // 默认 this 指向 exports, 这3个是同一个对象
console.log(exports);
console.log(module.exports);
