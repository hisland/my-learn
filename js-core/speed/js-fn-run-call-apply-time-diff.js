// https://github.com/calvinmetcalf/immediate/blob/master/lib/index.js
// 参见这个代码, Item.prototype.run 的实现虽然罗嗦, 却是考虑了性能的

function aa(bb) {
  return 2 + bb
}

// doing same
// console.log(aa(3))
// console.log(aa.apply(null, [3]))
// console.log(aa.call(null, 3))

{
  const t1 = new Date()
  for (let ii = 0; ii < 100000000; ii++) {
    const arr = [ii]
    aa(arr[0])
    // aa.call(null, arr[0])
    // aa.apply(null, arr)
  }
  const t2 = new Date()
  console.log('normal', t2 - t1)
}

{
  const t1 = new Date()
  for (let ii = 0; ii < 100000000; ii++) {
    const arr = [ii]
    // aa(arr[0])
    aa.call(null, arr[0])
    // aa.apply(null, arr)
  }
  const t2 = new Date()
  console.log('call', t2 - t1)
}

{
  const t1 = new Date()
  for (let ii = 0; ii < 100000000; ii++) {
    const arr = [ii]
    // aa(arr[0])
    // aa.call(null, arr[0])
    aa.apply(null, arr)
  }
  const t2 = new Date()
  console.log('apply', t2 - t1)
}
