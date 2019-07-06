'use strict'

let obj = {
  prop: function() {},
  foo: 'bar',
}

// New properties may be added, existing properties may be changed or removed.
obj.foo = 'baz'
obj.lumpy = 'woof'
delete obj.prop
console.log(1, obj)

let oo = Object.seal(obj)

console.log('same obj:', oo === obj)
console.log('isSealed:', Object.isSealed(obj))

// Changing property values on a sealed object still works.
obj.foo = 'new value'
console.log(obj)

try {
  // But you can't convert data properties to accessors, or vice versa.
  Object.defineProperty(obj, 'foo', {
    get: function() {
      return 'g'
    },
  }) // throws a TypeError
} catch (error) {
  console.log(error)
}

// Now any changes, other than to property values, will fail.
try {
  obj.quaxxor = 'the friendly duck' // silently doesn't add the property, strict throw error
} catch (error) {
  console.log(error)
}
try {
  delete obj.foo // silently doesn't delete the property, strict throw error
} catch (error) {
  console.log(error)
}
