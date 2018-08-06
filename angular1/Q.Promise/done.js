var Q = require('../bower_components/q/q.js');

var t = Q({a: 3});
t.then(function(val){
  console.log(val);
  val.b = 4;
});
var q = t.done();

console.log('q is undefined:', q);

