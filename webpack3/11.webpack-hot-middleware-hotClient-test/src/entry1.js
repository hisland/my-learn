require.ensure([], function() {
  let kk = require('./common1.js')
  console.log(kk)
}, 'bbq');

console.log('entry1');
