function* god() {
  let aa
  console.log(1)
  aa = yield 3 + 2
  console.log(2, aa)
  let bb = yield 'b'
  console.log(3, bb)
}

console.log('aa')
const it = god()
console.log('bb')
console.log(it.next())
console.log(it.next())
console.log(it.next()) //没有值了
console.log(it.next()) //没有值了
console.log('end')
