'use strict'

let assert = require('assert')
{
  // Object.preventExtensions returns the object being made non-extensible.
  let obj = {}
  let obj2 = Object.preventExtensions(obj)
  assert(obj === obj2)
}
{
  // Objects are extensible by default.
  let empty = {}
  assert(Object.isExtensible(empty) === true)

  // ...but that can be changed.
  Object.preventExtensions(empty)
  assert(Object.isExtensible(empty) === false)
}
{
  // Object.defineProperty throws when adding a new property to a non-extensible object.
  let nonExtensible = { removable: true }
  Object.preventExtensions(nonExtensible)
  // Object.defineProperty(nonExtensible, 'new', { value: 8675309 }); // throws a TypeError

  // In strict mode, attempting to add new properties to a non-extensible object throws a TypeError.
  // function fail() {
  //   'use strict';
  //   nonExtensible.newProperty = 'FAIL'; // throws a TypeError
  // }
  // fail();
}

{
  // EXTENSION (only works in engines supporting __proto__
  // (which is deprecated. Use Object.getPrototypeOf instead)):
  // A non-extensible object's prototype is immutable.
  let fixed = Object.preventExtensions({})
  // fixed.__proto__ = { oh: 'hai' }; // throws a TypeError
}

{
  let a = { a: 1 }
  console.log(a)
  Object.preventExtensions(a)
  a.a = 3 // 可以修改值
  console.log(a)
  delete a.a // 可以删除 属性
  console.log(a)
  // a.a = 4; // error, 不可以添加 属性
}
{
  let aa = {
    aa1: 1,
    aa2: 'god',
  }
  let kk = {
    kk1: 1,
    kk2: 'god',
  }
  let bb = Object.create(aa)
  bb.god = 'c'
  console.log(bb)
  console.log(bb.__proto__)
  bb.__proto__ = kk // ok, 可以改变原型
  console.log(bb.__proto__)
  Object.preventExtensions(bb)
  // b.__proto__ = a; // error, 不可以改变原型
}
