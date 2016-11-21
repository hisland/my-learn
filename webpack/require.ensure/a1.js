require.ensure([], function(require){
  var b = require('./b');

  console.log('in a1: ', b);
}, 'halo')
