var Q = require('../bower_components/q/q.js');

Q.when(3, function(){
  console.log(arguments);
});


// 注意这个并不会执行,直接函数是resolve的value
Q.when(function(){
  return 'god';
}, function(){
  console.log(arguments);
});

