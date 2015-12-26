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
  decodeStrings: false
});

// 使用文件测试
// var fs = require('fs');
// var rr = fs.createReadStream('./fs.createReadStream.js', {
//   highWaterMark: 32,
//   encoding: 'utf8'
// });
// rr.pipe(w);


// 使用自定义 readable 测试
var k = require('./myReadable-on-data.js');
var kk = new k();
kk.pipe(w);
