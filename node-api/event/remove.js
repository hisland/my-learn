var EventEmitter = require('events');

var a = new EventEmitter();

a.on('aa', function(e) {
  console.log('aa1', arguments);
});
a.on('aa', function(e) {
  console.log('aa2', arguments);
});


a.on('bb', function(e) {
  console.log('bb1', arguments);
});
function bb(){
  console.log('bb2', arguments);
}
a.on('bb', bb);

a.emit('aa', 1, 2, 3);
a.emit('bb', 1, 2, 3);

console.log('删除指定引用listener');
a.removeListener('bb', bb);

a.emit('aa', 1, 2, 3);
a.emit('bb', 1, 2, 3);

console.log('删除 整个type, 注意是 复数 s');
a.removeAllListeners('aa');

a.emit('aa', 1, 2, 3);
a.emit('bb', 1, 2, 3);

console.log('删除 所有, 注意是 复数 s');
a.removeAllListeners();

a.emit('aa', 1, 2, 3);
a.emit('bb', 1, 2, 3);
console.log('最后的 emit 就没有 listener 执行了');
