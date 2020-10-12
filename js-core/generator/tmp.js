function* aa(val0) {
  console.log(11, val0)
  const val1 = yield 22
  console.log(33, val1)
  const val2 = yield 44
  console.log(55, val2)
  return 66
  console.log(77) // 这里不可到达
}

function* bb() {
  console.log('sub1')
  const rs1 = yield aa('ss')
  console.log(rs1)
  const rs2 = yield new Promise(function (resolve, reject) {
    resolve('god')
  })
  console.log(rs2)
  return 'final'
}

const sub = bb()

console.log(sub.next())
console.log(sub.next('sub2'))
console.log(sub.next('other'))
console.log(sub.next())
