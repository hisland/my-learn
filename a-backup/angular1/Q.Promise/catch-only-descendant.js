var Q = require('../bower_components/q/q.js');


var q = Q({
  a: 3
});

q.then(function(val){
  throw 'error';
})

q.then(function(val){
  console.log(2, arguments);
  console.log(2, 'then throw error not catch by same level');
})



var q2 = Q({
  b: 3
});

q.then(function(val){
  throw 'error';
}).then(function(val){
  console.log('chain, can not see me');
}, function(reson){
  console.log(3, arguments);
  console.log(3, 'i catch error from prev then');
})


