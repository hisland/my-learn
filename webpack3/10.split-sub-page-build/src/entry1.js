require('./vue.js');
require('./sub1.js');
require('./sub2.js');
require.ensure('./common1.js', function() {
  console.log(33)
}, 'bbq');

console.log('entry1');
