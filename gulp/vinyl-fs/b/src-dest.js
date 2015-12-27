var vfs = require('vinyl-fs');
var map = require('map-stream');

vfs.src('./src-dest.js').pipe(vfs.dest('b'));
