'use strict'

function test() {
  let arr = [1, 2, 3]
  for (let ii in arr) {
    let kk = ii // 只在 for 里面起作用
    console.log(kk, ii)
  }
  console.log(arr) // ok
  console.log(kk) // 无法访问 报错
  console.log(ii) // 无法访问 报错
}
test()
