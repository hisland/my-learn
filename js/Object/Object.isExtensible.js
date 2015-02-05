'use strict';

var assert = require('assert');

// New objects are extensible.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...but that can be changed.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
assert(Object.isExtensible(sealed) === false);

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
assert(Object.isExtensible(frozen) === false);
