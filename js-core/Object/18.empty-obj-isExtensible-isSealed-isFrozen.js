'use strict'

// 空对象随便应用哪个, 都一样

{
  const aa = {}

  console.log('normal isExtensible', Object.isExtensible(aa)) // true
  console.log('normal isSealed', Object.isSealed(aa)) // false
  console.log('normal isFrozen', Object.isFrozen(aa)) // false
  console.log()
}

{
  const aa = {}
  Object.preventExtensions(aa)

  console.log('preventExtensions isExtensible', Object.isExtensible(aa)) // false
  console.log('preventExtensions isSealed', Object.isSealed(aa)) // true
  console.log('preventExtensions isFrozen', Object.isFrozen(aa)) // true
  console.log()
}

{
  const aa = {}
  Object.seal(aa)

  console.log('seal isExtensible', Object.isExtensible(aa)) // false
  console.log('seal isSealed', Object.isSealed(aa)) // true
  console.log('seal isFrozen', Object.isFrozen(aa)) // true
  console.log()
}

{
  const aa = {}
  Object.freeze(aa)

  console.log('freeze isExtensible', Object.isExtensible(aa)) // false
  console.log('freeze isSealed', Object.isSealed(aa)) // true
  console.log('freeze isFrozen', Object.isFrozen(aa)) // true
  console.log()
}
