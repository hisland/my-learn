'use strict'

var pp = new Proxy(
  function() {
    console.log('real call')
  },
  {
    // 处理 函数式调用
    apply: function(target, thisBinding, args) {
      console.log(thisBinding, args)
      return 33
    },
  }
)

pp(1, 2, 3)
pp.call({ a: 1 }, 1, 2, 3)
pp.apply({ b: 1 }, [1, 2, 3])

// 没有处理 new 操作
console.log(new pp(1, 2, 3))
