'use strict'

{
  // preventExtensions 阻止 添加属性
  // seal 在 preventExtensions 基础上设置所有 prop  configurable: false, 并且不能删除属性
  // freeze 在 seal 基础上设置所有 prop writable: false
  // 如果 obj 是 空对象 preventExtensions 和 seal 和 freeze 结果一样
  // 如果 obj 全是 get/set seal 和 freeze 结果一样
  // 所有操作都是 对象自身 与 属性 的一层关系, 不涉及嵌套对象
  //    属性返回的值不受控制, value 将是固定值, 如果 get, 返回的值可能不固定
}

{
  const aa = { bb: 1 }

  console.log('normal isExtensible', Object.isExtensible(aa))
  console.log('normal isSealed', Object.isSealed(aa))
  console.log('normal isFrozen', Object.isFrozen(aa))
  console.log()
}

{
  const aa = { bb: 1 }
  Object.preventExtensions(aa)

  console.log('preventExtensions isExtensible', Object.isExtensible(aa))
  console.log('preventExtensions isSealed', Object.isSealed(aa))
  console.log('preventExtensions isFrozen', Object.isFrozen(aa))
  console.log()
}

{
  const aa = { bb: 1 }
  Object.seal(aa)

  console.log('seal isExtensible', Object.isExtensible(aa))
  console.log('seal isSealed', Object.isSealed(aa))
  console.log('seal isFrozen', Object.isFrozen(aa))
  console.log()
}

{
  const aa = { bb: 1 }
  Object.freeze(aa)

  console.log('freeze isExtensible', Object.isExtensible(aa))
  console.log('freeze isSealed', Object.isSealed(aa))
  console.log('freeze isFrozen', Object.isFrozen(aa))
  console.log()
}
