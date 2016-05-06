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

// readable 数据丢失完了..
// r.on('readable', function() {
//   console.log('readable', r.read());
// })

// on data 始终能获取
r.on('data', function() {
  console.log('data', arguments);
})
r.on('end', function() {
  console.log('end');
})

r.resume();

module.exports = MyRead;
