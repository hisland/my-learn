'use strict'
const count = 1
function log(...vv) {
  console.log(count++, vv)
}

function* g2() {
  yield* [88, 99]
  yield* 'abc'
  yield* arguments
}

log('aa')
const it = g2('halo', 'god')
log('bb')
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log('end')
