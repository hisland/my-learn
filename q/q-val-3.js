var Q = require('../bower_components/q/q.js');


var q = Q(3);

q.then(function(val){
  console.log(1, arguments);
})

q.then(function(val){
  console.log(2, arguments);
})
