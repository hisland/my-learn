var stream = require('stream');
var Writable = stream.Writable;
var util = require('util');

util.inherits(MyWrite, Writable);

function MyWrite(opts) {
  Writable.call(this, opts)
}
MyWrite.prototype._write = function(chunk, encoding, next) {
  console.log('write', arguments);
  next();
}
MyWrite.prototype._writev = function(chunks, next) {
  chunks = [{
    chunk: '...',
    encoding: '...'
  }];
  next();
}

var w = new MyWrite({
  decodeStrings: false,
  highWaterMark: 1 // 主要设置这个 pipe 就可以自动 drain
});


w.on('drain', function() {
  console.log('drain', arguments);
})
w.on('error', function() {
  console.log('error', arguments);
})
w.on('finish', function() {
  console.log('finish', arguments);
})
w.on('pipe', function(src) {
  console.log('pipe', src === kk);
})
w.on('unpipe', function(src) {
  console.log('unpipe', src === kk);
})


// 使用文件测试
// var fs = require('fs');
// var rr = fs.createReadStream('./fs.createReadStream.js', {
//   highWaterMark: 32,
//   encoding: 'utf8'
// });
// rr.pipe(w);


// 使用自定义 readable 测试
var k = require('./myReadable-on-data.js');
var kk = new k({
  objectMode: true
});
kk.pipe(w);
setTimeout(function() {
  w.end('end')
}, 10);
