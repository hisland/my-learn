var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

function MyRead(opts) {
  Readable.call(this, opts)
}
MyRead.prototype._read = function() {
  this.push('{pp:1}'); // 默认要是 string/buffer
  // this.push({test:1}); // objectMode: true 才可以这样
}

util.inherits(MyRead, Readable);

var r = new MyRead({
  objectMode: true
});
var r2 = new MyRead();

console.log(r.read());
console.log(r2.read());
