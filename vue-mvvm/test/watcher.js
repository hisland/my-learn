const { Observe, Dep, Watcher } = require('../observe')

const some = { hey: 1, what: { yes: 'go' }, you: ['a'] }
Observe(some)

const ww1 = new Watcher(some, 'hey', function(newVal, oldVal) {
  console.log('hey', newVal, oldVal)
})
const ww2 = new Watcher(some, 'you', function(newVal, oldVal) {
  console.log('you', newVal, oldVal)
})
some.hey = 'yesk'
some.you = 'sayya'
some.you = 'hey mike'
some.hey = 'come on baby'
some.hey = { obj: 'obj2' }

console.log(some.hey)
