var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var modules = require('postcss-modules');

var raw = `
:fullscree{
  color:green;
}
`


var processor = postcss([cssnext]);
var css = processor.process(raw).css;
console.log(css);
