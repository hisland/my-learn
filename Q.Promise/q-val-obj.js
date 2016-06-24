var Q = require('../bower_components/q/q.js');


var q = Q({
  a: 3
});

q.then(function(val){
  console.log(1, arguments);
  val.b = 4;
  val.a = 5;
})

q.then(function(val){
  console.log(2, arguments);
})
