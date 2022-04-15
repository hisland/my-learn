'use strict'

const pp = new Proxy(
  function () {
    console.log('real call')
  },
  {
    construct: function (target, args, newTarget) {
      console.log('construct:', args)
      console.log('--- newTarget is pp: ', pp === newTarget)
      return { bb: 'q' } // 并没有真正使用 target
    },
  }
)

console.log(new pp(1, 2, 3))
