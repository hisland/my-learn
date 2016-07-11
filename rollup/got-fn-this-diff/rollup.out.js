'use strict';

function a(val) {
  return 'a:' + val;
}

var b = function b(val) {
  return 'b: ' + a(val);
};

console.log(123);
console.log(12, b(123));
console.log(1, b2(123));
console.log(1, c(123));