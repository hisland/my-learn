const count = 1
function log(...vv) {
  console.log(count++, vv)
}

function* god() {
  log(1)
  const aa = yield 'a'
  log(2, aa)
  const bb = yield 'b'
  log(3, bb)
}

log('aa')
const it = god()
log('bb')
log(it.next())
log(it.next())
log(it.next())
log(it.next())
log('end')
