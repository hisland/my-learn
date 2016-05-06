var EventEmitter = require('events');

var a = new EventEmitter();


a.once('aa', function(e) {
  console.log('aa1', arguments);
});

console.log('第一次有反应');
a.emit('aa', 1, 2, 3)

console.log('第二次没反应');
a.emit('aa', 1, 2, 3)
