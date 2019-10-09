'use strict'

const pp = new Proxy(
  function() {
    console.log('real call')
  },
  {
    construct: function(target, args, newTarget) {
      console.log(args)
      console.log('--- newTarget is pp: ', pp === newTarget)
      return { bb: 'q' }
    },
  }
)

console.log(new pp(1, 2, 3))
