'use strict';

var o = {};
o.prop = 'is enumerable';
o[1] = 'val';
console.log(o.propertyIsEnumerable('prop'));; // returns true
console.log(o.propertyIsEnumerable(1));; // returns true
console.log(o);

var a = [];
a[0] = 'is enumerable';
a.god = 'test';
console.log(a.propertyIsEnumerable(0));; // returns true
console.log(a.propertyIsEnumerable('god'));; // returns true
console.log(a);

console.log(a[0]);
console.log(a[1]); // not work
