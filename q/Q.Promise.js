var Q = require('../bower_components/q/q.js');

var p = Q.Promise(function(resolve, reject, notify){
  setTimeout(function() {
    resolve('god');
  }, 1000);
  setTimeout(function() {
    reject('bad');
  }, 800);
});

p.then(function(){
  console.log('then: ', arguments);
});

p.fail(function(){
  console.log('fail: ', arguments);
});
