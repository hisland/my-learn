var gs = require('glob-stream');
var map = require('map-stream');


var globStream = gs.create(['../through2/*.js', './*.js']);

console.log('通过 ordered-read-streams 保证 glob 的匹配是 从左到右,从上到下 pipe 的');

var count = 0;
globStream.pipe(map(function(file, cb) {
  console.log(count++, file);
}))
