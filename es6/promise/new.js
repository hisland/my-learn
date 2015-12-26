var a = new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(3)
  }, 1000);
});

a.then(function(value){
  console.log('resolve: ', value);
}, function(value){
  console.log('reject: ', value);
});


var a = new Promise(function(resolve, reject){
  setTimeout(function() {
    reject(10)
  }, 1000);
});

a.then(function(value){
  console.log('resolve: ', value);
}, function(value){
  console.log('reject: ', value);
});
