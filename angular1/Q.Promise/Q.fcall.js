var Q = require('../bower_components/q/q.js');

Q.fcall(function(){
  return 'ret some value as fullfiled-value';
}).then(function(val){
  console.log(arguments);
})


Q.fcall(function(a, b){
  return 'fn can has args: a+b=' + (a+b);
}, 2, 3).then(function(val){
  console.log(arguments);
})



Q.fcall(function(a, b){
  throw 'fn throw something';
}, 2, 3).fail(function(val){
  console.log(arguments);
})

