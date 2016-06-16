require.ensure([], function(require){
  var b = require('./b');

  console.log(b);
}, 'halo')
