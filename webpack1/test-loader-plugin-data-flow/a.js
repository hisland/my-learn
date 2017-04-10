console.log(4, 5);

// var bb = require('./loader/aa-loader?a=1&b=2!./loader/bb-loader!./b');
var cc = require('./loader/css-loader!./c.css');
console.log('in a: ', bb);
console.log('in a: ', cc);
