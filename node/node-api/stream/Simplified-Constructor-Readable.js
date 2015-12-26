var stream = require('stream');
var Readable = stream.Readable;

var count = 0;
var r = new Readable({
  read: function(n) {
    if (count++ < 3) {
      this.push('{some:' + count + '}');
    }
  }
});

console.log('直接得到实例');
r.on('data', function() {
  console.log('data', arguments);
})

