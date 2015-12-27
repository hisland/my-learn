var vfs = require('vinyl-fs');
var map = require('map-stream');

vfs.src('../../../xyz.png').pipe(map(function(file, cb) {
  console.log(file.relative);
  console.log(file.dirname);
  console.log(file.basename);
  cb(null, file);
})).pipe(map(function(file, cb) {
  console.log('a', file);
  cb(null, 'some');
})).pipe(map(function(file, cb) {
  console.log('b', file);
}))
