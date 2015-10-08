var Q = require('../bower_components/q/q.js');

var d = Q.defer();


d.promise.delay(1000).then(function(){
  console.log('d1', arguments);
  return Q(3).delay(1000);
}).then(function(){
  console.log('ok', arguments);
});

d.resolve('god');


