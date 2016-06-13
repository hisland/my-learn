var postcss = require('postcss');
var autoprefixer = require('autoprefixer');

var processor = postcss([autoprefixer]);
var css = processor.process('a{display:flex;}').css;
console.log(css);


var processor2 = postcss();
var css = processor2.process('a{display:flex;}').css;
console.log(css);


var processor3 = postcss([autoprefixer])
processor3
.process('a{display:flex;}')
.then(function(rs){
  console.log(rs.processor === processor3);
  console.log(rs.css);
});
