var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

function MyRead(opts) {
  Readable.call(this, opts)
}
MyRead.prototype._read = function() {
  console.log(11, this._readableState.objectMode);
  this.push({hello:1});
}

util.inherits(MyRead, Readable);

var r = new MyRead({
  objectMode: true,
  highWaterMark: 3
});

r.pause();
console.log(r.read());
console.log(r.read());
console.log(r.read());
console.log(r.isPaused());
console.log('最后出现的几个输出, 跟 highWaterMark 有关, 就是当没有read的时候, 会填充 highWaterMark 次');
