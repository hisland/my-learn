var Buffer = require('buffer').Buffer;

var a1 = new Buffer('今天, ok');
var a2 = new Buffer('today, ok');

console.log('byteLength: ', Buffer.byteLength(a1));
console.log('byteLength: ', Buffer.byteLength(a2));

console.log('compare: ', Buffer.compare(a1, a2));
console.log('compare: ', Buffer.compare(a2, a1));

console.log('concat: ', Buffer.concat([a1, a2]));
console.log('concat: ', Buffer.concat([a2, a1]));

console.log('isBuffer: ', Buffer.isBuffer(a1));

console.log('isEncoding UTF8: ', Buffer.isEncoding('UTF8'));
console.log('isEncoding UTF-8: ', Buffer.isEncoding('UTF-8'));
console.log('isEncoding utf8: ', Buffer.isEncoding('utf8'));
console.log('isEncoding utf-8: ', Buffer.isEncoding('utf-8'));


