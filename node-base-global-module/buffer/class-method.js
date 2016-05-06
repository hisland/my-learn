var Buffer = require('buffer').Buffer;

var a1 = new Buffer('今天, ok');
var a2 = new Buffer('today, ok');

console.log('isBuffer: ', Buffer.byteLength(a1));
console.log('isBuffer: ', Buffer.byteLength(a2));

console.log('isBuffer: ', Buffer.compare(a1, a2));
console.log('isBuffer: ', Buffer.compare(a2, a1));

console.log('isBuffer: ', Buffer.concat([a1, a2]));
console.log('isBuffer: ', Buffer.concat([a2, a1]));

console.log('isBuffer: ', Buffer.isBuffer(a1));

console.log('isBuffer: ', Buffer.isEncoding('utf8'));
console.log('isBuffer: ', Buffer.isEncoding('utf-8'));


