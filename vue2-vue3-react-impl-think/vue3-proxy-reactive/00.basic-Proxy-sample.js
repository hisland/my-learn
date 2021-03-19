// https://github.com/vuejs/vue-next/tree/master/packages/reactivity/src
// 查看 vue3 的 reactivity 包的实现

const obj = {
  aa: 1,
  bb: 'a',
}

// Proxy 只是代理操作, 结果反应到原对象身上
// 如果对 Proxy 实例进行操作, 会触发相应的 handle 执行, 此时可以做额外操作
// vue3 就是基于此来劫持数据变化
const pp1 = new Proxy(obj, {
  get: function (target, name, receiver) {
    console.log('get', target, name)
    return Reflect.get(target, name, receiver) // Reflect 穿透, 使操作结果和原始操作一模一样
  },
  set: function (target, name, value, receiver) {
    console.log('set', target, name, value)
    return Reflect.set(target, name, value, receiver) // Reflect 穿透, 使操作结果和原始操作一模一样
  },
})

pp1.cc = 3
console.log(JSON.stringify(obj))
console.log(pp1.aa, obj.aa)
console.log(pp1.bb, obj.bb)
obj.dd = 55
console.log(JSON.stringify(obj))
