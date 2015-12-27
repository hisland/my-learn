var File = require('vinyl');

var f = new File({
  cwd: '.',
  base: '/a/',
  path: '/b/c.js',
  contents: new Buffer('hello')
});

console.log(File.isVinyl(f));
console.log(f);
console.log(f.isBuffer());
console.log(f.isStream());
console.log(f.isNull());

console.log(f.contents.toString());
console.log(f.relative);
console.log(f.dirname);
console.log(f.basename);

console.log(f.stem);
f.stem = 'god';
console.log(f.stem, f);

console.log(f.extname);
