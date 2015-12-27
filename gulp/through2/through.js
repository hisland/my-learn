var through = require('through2');
var fs = require('fs');

// https://github.com/rvagg/through2

console.log('默认是buffer');
fs.createReadStream('./through.js', {
    highWaterMark: 32, // 8个字节一次
    encoding: 'utf8' // 默认是buffer输出
  })
  .pipe(through(function(chunk, enc, callback) {
    console.log(chunk);
    this.push(chunk);
    callback();
  }))
  .pipe(fs.createWriteStream('./b.js'))
