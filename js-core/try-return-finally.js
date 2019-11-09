function aa(fail) {
  try {
    console.log('下面一行返回值了')
    return bb(fail) // 执行完 bb, 再执行下面的 finally
  } catch (e) {
    console.log('遇到错误', e)
  } finally {
    console.log('返回了也要执行 finally')
  }
}
function bb(fail) {
  if (fail) {
    throw Error('err in bb')
  } else {
    console.log('in bb')
  }
}

console.log(1)
aa(true)
console.log(2)
aa(false)
console.log(3)
