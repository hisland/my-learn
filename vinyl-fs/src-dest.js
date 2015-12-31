var map = require('map-stream');
var vfs = require('vinyl-fs');

var log = function(file, cb) {
  console.log(file.contents.length);
  cb(null, file);
};

vfs.src(['../gulp/*.js'])
  .pipe(map(log))
  .pipe(vfs.dest('./output'));

