var stream = require('stream');
var Writable = stream.Writable;

var r = new Writable({
  write: function(chunk, encoding, next) {
    console.log('write', arguments);
    next();
  }
});

// 使用自定义 readable 测试
var k = require('./myReadable-on-data.js');
var kk = new k();
kk.pipe(r);

var r2 = new Writable({
  writev: function(chunks, next) {
    console.log('write', arguments);
    next();
  }
});

// 使用自定义 readable 测试
var kk2 = new k();
kk2.pipe(r2);
