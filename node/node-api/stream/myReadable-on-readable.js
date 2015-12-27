var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

function MyRead(opts) {
  Readable.call(this, opts);
  this.n = 3;
}
// 这样就是在每个tick执行一次, 触发多个 readable
// MyRead.prototype._read = function() {
//   setTimeout(() => {
//     if (this.n--) {
//       console.log(this.n);
//       this.push('{pp:' + this.n + '}');
//     } else {
//       this.push(null)
//     }
//   }, 0)
// }

// 只触发2次 readable
MyRead.prototype._read = function() {
  if (this.n--) {
    console.log(this.n);
    this.push('{pp:' + this.n + '}');
  } else {
    this.push(null)
  }
}
util.inherits(MyRead, Readable);

var r = new MyRead({
  objectMode: true
});

r.on('readable', function() {
  console.log('readable', r.read());

  // 官方doc是这样用的
  // while (null !== (chunk = r.read())) {
  //   console.log('read', chunk);
  // }
})
r.on('end', function() {
  console.log('end');
})


module.exports = MyRead;
