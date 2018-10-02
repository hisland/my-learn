var Q = require('../bower_components/q/q.js');


var q = Q();

q.then(function(val){
  return 'god';
}).then(function(val){
  console.log(arguments);
  return 'please';
}).then(function(val){
  console.log(arguments);
  return 'halo';
}).then(function(val){
  console.log(arguments);
})

