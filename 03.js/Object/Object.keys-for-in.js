'use strict';

var p = {
  god: 'ccc'
}

var c = Object.create(p);
c.test = 123;

console.log('keys only own props');
console.log(Object.keys(c));

console.log('-----------------------');
console.log('for in has parent props');
for (var i in c) {
  console.log('has prop: ', i, '       c.hasOwnProperty: ', c.hasOwnProperty(i));
}
