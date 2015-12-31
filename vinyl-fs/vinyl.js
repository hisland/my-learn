var File = require('vinyl');
var fs = require('fs');

var a = new File({
  contents: new Buffer("some text")
})

a.pipe(fs.createWriteStream('b.js'))
