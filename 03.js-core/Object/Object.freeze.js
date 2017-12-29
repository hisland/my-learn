'use strict';

var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.freeze(obj);

console.log(Object.isFrozen(obj));

// Now any changes will fail
// obj.foo = 'quux'; // silently does nothing, strict mode, throw error
// obj.quaxxor = 'the friendly duck'; // silently doesn't add the property, strict mode, throw error


// Attempted changes through Object.defineProperty will also throw
// Object.defineProperty(obj, 'ohai', { value: 17 }); // throws a TypeError
// Object.defineProperty(obj, 'foo', { value: 'eit' }); // throws a TypeError


obj = {
  internal: {}
};

Object.freeze(obj);
obj.internal.a = 'internal Value';
console.log(obj.internal.a);

// To make obj fully immutable, freeze each object in obj.
// To do so, we use this function.

function deepFreeze(o) {
  var prop, propKey;
  Object.freeze(o); // First freeze the object.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      // If the object is on the prototype, not an object, or is already frozen,
      // skip it. Note that this might leave an unfrozen reference somewhere in the
      // object if there is an already frozen object containing an unfrozen object.
      continue;
    }

    deepFreeze(prop); // Recursively call deepFreeze.
  }
}

var obj2 = {
  internal: {}
};

deepFreeze(obj2);
// obj2.internal.a = 'anotherValue'; // silently does nothing, strict mode, throw error
