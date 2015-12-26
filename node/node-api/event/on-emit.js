var EventEmitter = require('events');

var a = new EventEmitter();

console.log('addListener 是 on 的 alias');

a.addListener('aa', function(e) {
  console.log('aa1', arguments);
});
a.on('aa', function(e) {
  console.log('aa2', arguments);
});

a.emit('aa', 1, 2, 3)
