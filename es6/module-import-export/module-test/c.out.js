'use strict';

var _b = require('./b.out');

console.log(_b.bb);
setTimeout(function () {
  console.log('c', _b.bb);
}, 700);
