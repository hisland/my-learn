var gs = require('glob-stream');
var map = require('map-stream');


var globStream = gs.create(['../through2/*.js', './*.js']);

var count = 0;
globStream.pipe(map(function(file, cb) {
  console.log(count++, file);
}))
