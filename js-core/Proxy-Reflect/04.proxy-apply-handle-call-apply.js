'use strict'

const pp = new Proxy(
  function () {
    console.log('real call')
  },
  {
    // 处理 函数式调用
    apply: function (target, thisBinding, args) {
      console.log('apply: ', thisBinding, args)
      return 33
    },
  }
)

pp(1, 2, 3)
pp.call({ aa: 'aa' }, 1, 2, 3)
pp.apply({ bb: 'bb' }, [1, 2, 3])

// 没有处理 new 操作
console.log('new: ', new pp(1, 2, 3))
