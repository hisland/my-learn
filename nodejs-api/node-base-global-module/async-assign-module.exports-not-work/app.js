var b = require('./b');

console.log(b);

setTimeout(function() {
  console.log('app b 还是之前的: ', b) // 不希望这样

  var b2 = require('./b');
  console.log('app b2: ', b2)

  require('./cc')
}, 100);
