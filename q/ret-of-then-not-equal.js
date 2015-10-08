var Q = require('../bower_components/q/q.js');


var q = Q({
  a: 3
});

var b = q.then(function(val){
  console.log(1, arguments);
  val.b = 4;
  val.a = 5;
})

var c = q.then(function(val){
  console.log(2, arguments);
})

console.log('q === b', q === b);
console.log('q === c', q === c);
console.log('b === c', b === c);
