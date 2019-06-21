const { Observe, Dep, Watcher } = require('../observe')

const some = { hey: 1, what: { yes: 'go' }, you: ['a'] }
Observe(some)

console.log('\n1----')
console.log(some)
console.log(some.hey)
console.log(some.you)
console.log(some.you[0])

some.hey = 99
some.you = 'yes'

console.log('\n2----')
console.log(some)
console.log(some.hey)
console.log(some.you)
console.log(some.you[0])
