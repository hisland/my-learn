exports.a = 123;
exports.b = 123;

module.exports = {hao:'123'} // 并没有改变 exports 变量
exports = {test: 'come'}; // 也不会改变this指向

console.log(module.exports); // 这 3 个已经分别指向3个对象了
console.log(exports);
console.log(this);

// 最终外部require得到的是 module.exports, 所以要注意上面的问题
