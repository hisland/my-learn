'use strict'

// 兼具 定义/修改 对象上的属性的功能

var a = Object.defineProperty({}, 'prop1', {
  value: 'prop value',
  enumerable: true,
})
console.log('defineProperty: ', a)

var o = {}
o.a = 1
// 相当于:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
})

var a = {
  get a() {
    return this._a
  },
}
// 相当于:
Object.defineProperty(o, 'a', {
  get: function() {
    return this._a
  },
  set: undefined,
  configurable: true,
  enumerable: true,
})
a.a = 'some' // 报错

var a = {
  get a() {
    return this._a
  },
  set a(val) {
    this._a = val
  },
}
// 相当于:
Object.defineProperty(o, 'a', {
  get: function() {
    return this._a
  },
  set: function(val) {
    this._a = val
  },
  configurable: true,
  enumerable: true,
})

var a = {
  set a(val) {
    this._a = val
  },
}
// 相当于:
Object.defineProperty(o, 'a', {
  get: undefined,
  set: function(val) {
    this._a = val
  },
  configurable: true,
  enumerable: true,
})
console.log(a.a) // undefined 不会报错

// On the other hand,
Object.defineProperty(o, 'a', { value: 1 })
// 相当于: 其它配置取默认值
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
})

// 有2种属性描述 data descriptor 和 accessor descriptor
// data descriptor 和 accessor descriptor 不能共存, 2者只能选其1

// data descriptor 默认值
Object.defineProperty(o, 'a', {
  value: undefined,
  writable: false,
})

// accessor descriptor, function 或者 undefined
Object.defineProperty(o, 'a', {
  get: undefined,
  set: undefined,
})

// data 和 accessor 都可以有的key 默认值
Object.defineProperty(o, 'a', {
  configurable: false,
  enumerable: false,
})

{
  const aa = { cc: 1 } // 原有属性默认全 true
  console.log(Object.getOwnPropertyDescriptors(aa))
  Object.defineProperty(aa, 'cc', { value: '33' }) // 只修改值, 其它不变
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { value: '44' }) // 所以可以不断修改
  console.log(aa.cc)
}
{
  const aa = {}
  console.log(Object.getOwnPropertyDescriptors(aa))
  Object.defineProperty(aa, 'cc', { value: '33', writable: true }) // 这是新建属性, 只有 writable true
  console.log(aa) // 不可枚举
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { value: '44' }) // 可修改
  console.log(aa.cc)
}

{
  const aa = {}
  console.log(Object.getOwnPropertyDescriptors(aa))
  Object.defineProperty(aa, 'cc', { value: '33' }) // 这是新建属性, 用 defineProperty 其它 全是false
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { value: '44' }) // 不可修改
}

{
  const aa = {}
  Object.defineProperty(aa, 'cc', { value: '33', writable: true }) // 这是默认 configurable false
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { value: '44' }) // 修改值不算 configurable ok
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { value: '44', configurable: true }) // 其它修改算 configurable , 报错
}

{
  const aa = {}
  Object.defineProperty(aa, 'cc', { value: '33', writable: true }) // 这是默认 configurable false
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { writable: false }) // configurable false, 只能将 writable 改成 false
  console.log(aa.cc)
  Object.defineProperty(aa, 'cc', { writable: true }) // configurable false, 再打开 报错
  console.log(aa.cc)
}
