var stream = require('stream');
var Readable = stream.Readable;

var r = new Readable({});

r.on('close', function() {
  console.log('close', arguments);
})
r.on('data', function() {
  console.log('data', arguments);
})
r.on('end', function() {
  console.log('end', arguments);
})
r.on('error', function() {
  console.log('error', arguments);
})
r.on('readable', function() {
  console.log('readable', arguments);
})

console.log(01, r.isPaused);
console.log(02, r.pause);
console.log(03, r.pipe);
console.log(04, r.read);
console.log(05, r.resume);
console.log(06, r.setEncoding);
console.log(07, r.unpipe);
console.log(08, r.unshift);
console.log(09, r.wrap);
console.log(10, r.on);
console.log(11, r.emit);


