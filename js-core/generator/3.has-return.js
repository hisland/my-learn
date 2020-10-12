'use strict'

function* god() {
  let aa
  console.log(1)
  return 3 + 2
  console.log(2, aa)
  let bb = yield 'b'
  console.log(3, bb)
}

console.log('aa')
var it = god()
console.log('bb')
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log('end')
