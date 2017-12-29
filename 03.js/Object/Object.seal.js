'use strict';

var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

console.log(obj);

var o = Object.seal(obj);

console.log(o === obj);
console.log(Object.isSealed(obj));

// Changing property values on a sealed object still works.
obj.foo = 'new value';
console.log(obj);

// But you can't convert data properties to accessors, or vice versa.
// Object.defineProperty(obj, 'foo', { get: function() { return 'g'; } }); // throws a TypeError

// Now any changes, other than to property values, will fail.
// obj.quaxxor = 'the friendly duck'; // silently doesn't add the property, strict throw error
// delete obj.foo; // silently doesn't delete the property, strict throw error
