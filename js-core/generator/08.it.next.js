function* aa(val0) {
  console.log(11, val0)
  const val1 = yield 22
  console.log(33, val1)
  const val2 = yield 44
  console.log(55, val2)
  return 66
  console.log(77) // 这里不可到达
}

function run() {
  const it = aa('ss')
  console.log(it.next('aa')) // 第一个被丢弃了
  console.log(it.next('bb'))
  console.log(it.next('cc')) // 这里就结束了
  console.log(it.next('dd')) // 这里已经没有了
}

run()
