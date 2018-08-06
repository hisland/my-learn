var Q = require('../bower_components/q/q.js');

console.log('the return promise then');
Q(3).then(function(val) {
  return Q('god').then(function(val) {
    console.log(2, arguments);
  });
});

console.log('then return promise');
Q(3).then(function(val) {
  return Q('god');
}).then(function(val) {
  console.log(2, arguments);
});

console.log('then ret val');
Q(3).then(function(val) {
  return 'god';
}).then(function(val) {
  console.log(2, arguments);
});

console.log('发现q里面的代码都是异步执行的');
