var through = require('through2');
var fs = require('fs');

console.log('使用obj初始化, 相当于 through2({ objectMode: true }, fn)');
fs.createReadStream('./through.js', {
    highWaterMark: 32, // 8个字节一次
    encoding: 'utf8' // 默认是buffer输出
  })
  .pipe(through.obj(function(chunk, enc, callback) {
    console.log(chunk);
    this.push(chunk);
    callback();
  }))
  .pipe(fs.createWriteStream('./b.js'))
