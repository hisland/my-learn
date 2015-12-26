var stream = require('stream');
var Writable = stream.Writable;

var r = new Writable({});

r.on('drain', function() {
  console.log('drain', arguments);
})
r.on('error', function() {
  console.log('error', arguments);
})
r.on('finish', function() {
  console.log('finish', arguments);
})
r.on('pipe', function() {
  console.log('pipe', arguments);
})
r.on('unpipe', function() {
  console.log('unpipe', arguments);
})

console.log(01, r.cork);
console.log(02, r.end);
console.log(03, r.setDefaultEncoding);
console.log(04, r.uncork);
console.log(05, r.write);

