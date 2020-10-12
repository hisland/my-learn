'use strict'
const count = 1
function log(...vv) {
  console.log(count++, vv)
}

function* g1() {
  yield 2
  yield 3
  yield 4
}
function* g2() {
  yield 1
  yield* g1()
  yield 5
}

log('aa')
const it = g2()
log('bb')
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log('end')
