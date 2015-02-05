'use strict';

var assert = require('assert');

// Object.preventExtensions returns the object being made non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
assert(obj === obj2);

// Objects are extensible by default.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...but that can be changed.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Object.defineProperty throws when adding a new property to a non-extensible object.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
// Object.defineProperty(nonExtensible, 'new', { value: 8675309 }); // throws a TypeError

// In strict mode, attempting to add new properties to a non-extensible object throws a TypeError.
// function fail() {
//   'use strict';
//   nonExtensible.newProperty = 'FAIL'; // throws a TypeError
// }
// fail();

// EXTENSION (only works in engines supporting __proto__
// (which is deprecated. Use Object.getPrototypeOf instead)):
// A non-extensible object's prototype is immutable.
var fixed = Object.preventExtensions({});
// fixed.__proto__ = { oh: 'hai' }; // throws a TypeError



var a = {a:1}
console.log(a);
Object.preventExtensions(a);
a.a = 3;
console.log(a);
delete a.a;
console.log(a);
// a.a = 4; // error

var a = {
  p: 1,
  s: 'god'
}
var k = {
  e: 1,
  r: 'god'
}
var b = Object.create(a);
b.god = 'c';
console.log(b);
console.log(b.__proto__);
b.__proto__ = k; // ok
console.log(b.__proto__);
Object.preventExtensions(b);
// b.__proto__ = a; // error
