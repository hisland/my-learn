var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

function MyRead(opts) {
  Readable.call(this, opts);
  this.n = 3;
}
MyRead.prototype._read = function() {
  if (this.n--) {
    this.push('{pp:' + this.n + '}');
  }
}

util.inherits(MyRead, Readable);

var r = new MyRead({
  objectMode: true
});

r.on('data', function() {
  console.log('data', arguments);
})


module.exports = MyRead;
