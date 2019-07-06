'use strict'

let assert = require('assert')

// New objects are extensible.
let empty = {}
console.log(Object.isExtensible(empty))

// ...but that can be changed.
Object.preventExtensions(empty)
console.log(Object.isExtensible(empty))

// Sealed objects are by definition non-extensible.
let sealed = Object.seal({})
console.log(Object.isExtensible(sealed))

// Frozen objects are also by definition non-extensible.
let frozen = Object.freeze({})
console.log(Object.isExtensible(frozen))
