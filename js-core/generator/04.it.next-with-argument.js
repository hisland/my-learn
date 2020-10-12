const count = 1
function log(...bb) {
  console.log(count++, bb)
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
log(it.next('aaa')) // 只接收一个参数
log(it.next('bbb', 'not use')) //第2个参数忽略了
log(it.next('ccc'))
log(it.next('ddd'))
log('end')
