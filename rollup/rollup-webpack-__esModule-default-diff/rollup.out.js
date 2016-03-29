'use strict';

function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

var a = __commonjs(function (module, exports) {
exports.a = 3;
exports.halo = function () {
  console.log('test');
};
});

var some = (a && typeof a === 'object' && 'default' in a ? a['default'] : a);
var halo = a.halo;
var a = a.a;

console.log(some);
console.log(halo);