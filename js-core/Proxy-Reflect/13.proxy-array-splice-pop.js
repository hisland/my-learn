'use strict'

const halo = ['d', 'e', 'f']

const pp = new Proxy(halo, {
  set: function (target, name, value, receiver) {
    console.log('set ', name, value)
    return Reflect.set(target, name, value, receiver)
  },
  get: function (target, name, receiver) {
    console.log('get ', name)
    // push / pop 本质是先读取属性
    // 这里要返回原始的操作, 不然 push/pop 不能正常运行
    return Reflect.get(target, name, receiver)
  },
})

console.log(
  1,
  '------ 可以看到, 先依次把 f/e/d 设置到目标位置, 再把 a/b 插入目标位置'
)
pp.splice(0, 0, 'a', 'b')
console.log(halo)
console.log(2, '------')
pp.pop()
console.log(halo)
