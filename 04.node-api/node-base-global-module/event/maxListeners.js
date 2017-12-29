var EventEmitter = require('events');

var a = new EventEmitter();


a.addListener('aa', function(e) {
  console.log('aa1', arguments);
});
a.on('aa', function(e) {
  console.log('aa2', arguments);
});

a.emit('aa', 1, 2, 3)


console.log(a.getMaxListeners());
a.setMaxListeners(20);
console.log(a.getMaxListeners());
