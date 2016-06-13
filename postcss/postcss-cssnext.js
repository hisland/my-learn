var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');

var raw = `
:root{
  --red: red;
}
a{
  &:hover{
    color: color(var(--red) a(54%))
  }
}
`


var processor = postcss([cssnext]);
var css = processor.process(raw).css;
console.log(css);
