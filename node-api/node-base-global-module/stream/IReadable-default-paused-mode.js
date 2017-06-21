var stream = require('stream');
var Readable = stream.Readable;

var r = new Readable();


console.log('新建默认是 暂停模式');

console.log('由于代码实现是 ._readableState.flowing: ', r._readableState.flowing);
console.log('r.isPaused : ', r.isPaused.toString());
console.log('所以 r.isPaused() 是: ', r.isPaused());
