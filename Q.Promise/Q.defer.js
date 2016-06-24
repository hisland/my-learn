var Q = require('../bower_components/q/q.js');

var d = Q.defer();

setTimeout(function() {
  d.resolve(333);
}, 1000);

d.promise.then(function(){
  console.log(arguments);
})
