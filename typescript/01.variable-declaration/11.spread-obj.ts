// 对象 spread , 限制更多
// 因为存在同名属性覆盖
// 原型链接方法被忽略这些情况

{
  let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' }
  console.log('defaults: ', defaults)

  let search1 = { ...defaults, food: 'rich' }
  console.log('search1: ', search1)

  // let search2 = { food: 'rich', ...defaults } // deno 执行报错, 因为 food 会被后面的覆盖
  // console.log('search2: ', search2)
}

{
  let defaults = {
    foo: 'spicy',
    mm() {
      console.log('mm')
    },
  }
  console.log('defaults: ', defaults)

  let search1 = { ...defaults, food: 'rich' } // mm 方法存在
  console.log('search1: ', search1)
}

{
  class Foo {
    foo = 'spicy'
    mm() {
      console.log('mm')
    }
  }
  let defaults = new Foo()
  console.log('defaults: ', defaults)

  let search1 = { ...defaults, food: 'rich' } // mm 方法消失
  console.log('search1: ', search1)
}

{
  let defaults = {
    foo: 'spicy',
  }
  Object.defineProperty(defaults, 'bar', {
    value: 'yes',
    enumerable: false, // 不能枚举, 则不能 spread
  })
  console.log('defaults: ', defaults)

  let search1 = { ...defaults, food: 'rich' } // bar 不存在
  console.log('search1: ', search1)
}

export const preventVSCodeError = 1
