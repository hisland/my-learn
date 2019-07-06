'use strict'
{
  // Objects aren't sealed by default.
  let empty = {}
  console.log(1, Object.isSealed(empty))

  // If you make an empty object non-extensible, it is vacuously sealed.
  Object.preventExtensions(empty)
  console.log(1, Object.isSealed(empty))
}

{
  // The same is not true of a non-empty object, unless its properties are all non-configurable.
  let hasProp = { fee: 'fie foe fum' }
  Object.preventExtensions(hasProp)
  console.log(2, Object.isSealed(hasProp))

  // But make them all non-configurable and the object becomes sealed.
  Object.defineProperty(hasProp, 'fee', { configurable: false })
  console.log(2, Object.isSealed(hasProp))
}

{
  // The easiest way to seal an object, of course, is Object.seal.
  let sealed1 = { ww: 3 }
  let sealed2 = {}
  Object.seal(sealed1)
  Object.seal(sealed2)
  console.log(3, Object.isSealed(sealed1), Object.isSealed(sealed2))

  // A sealed object is, by definition, non-extensible.
  console.log(3, Object.isExtensible(sealed1), Object.isExtensible(sealed2))

  // A sealed object might be frozen, but it doesn't have to be.
  console.log(3, Object.isFrozen(sealed1), Object.isFrozen(sealed2))
}

{
  let s2 = Object.seal({ p: 3 })
  console.log(4, Object.isFrozen(s2)) // 'p' is still writable

  let s3 = Object.seal({
    get p() {
      return 0
    },
  })
  console.log(4, Object.isFrozen(s3))
}
