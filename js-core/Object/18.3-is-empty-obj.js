'use strict'

{
  const aa = {}

  console.log(Object.isExtensible(aa))
  console.log(Object.isSealed(aa))
  console.log(Object.isFrozen(aa))
  console.log()
}

{
  const aa = {} // 空对象
  Object.preventExtensions(aa)

  console.log(Object.isExtensible(aa))
  console.log(Object.isSealed(aa)) // 这 2 个是 true
  console.log(Object.isFrozen(aa)) // 这 2 个是 true
  console.log()
}

{
  const aa = {}
  Object.seal(aa)

  console.log(Object.isExtensible(aa))
  console.log(Object.isSealed(aa))
  console.log(Object.isFrozen(aa))
  console.log()
}

{
  const aa = {}
  Object.freeze(aa)

  console.log(Object.isExtensible(aa))
  console.log(Object.isSealed(aa))
  console.log(Object.isFrozen(aa))
  console.log()
}
