var Q = require('../bower_components/q/q.js');


var q = Q(3);

q.then(function(val){
  console.log('ok', arguments);
});

q.then(null, function(reson){
  console.log('error', arguments);
})

q.fin(function(){
  console.log('fin', arguments);
})
