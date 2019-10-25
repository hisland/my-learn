var Buffer = require('buffer').Buffer;

var a1 = new Buffer(10); // 长度 , node-8开始 会采用0填充空间, 速度慢一点但是安全
console.log(a1);

var a2 = new Buffer('你', 'ascii'); // 字符串, 指定字符, 注意这个应该是失败的, ascii不包含'你'这个字
console.log(a2);
var a22 = new Buffer('你'); // 字符串, 默认utf8
console.log(a22);


var a3 = new Buffer([10, 11]); // 10进制数组
console.log(a3);


var a4 = new Buffer(a2); // 复制
console.log(a4, a4 === a2);
