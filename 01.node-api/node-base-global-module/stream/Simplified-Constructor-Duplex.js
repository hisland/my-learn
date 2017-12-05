var stream = require('stream');
var Duplex = stream.Duplex;

var count = 0;
var r = new Duplex({
  read: function(n) {
    if (count++ < 3) {
      this.push('{some:' + count + '}');
    }
  },
  write: function(chunk, encoding, next) {
    console.log('write', arguments);
    next();
  }
});

console.log('直接得到实例');
r.on('data', function() {
  console.log('data', arguments);
});

console.log('给自己');
r.pipe(r);
