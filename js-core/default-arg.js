// 参数默认值

function test(aa = 'test', bb = 'halo', cc = 'cc') {
  console.log(aa, bb, cc)
}
test()
test(1) // aa
test(1, 2) // aa, bb , 并不是 aa, cc
test(1, undefined, 2) // aa, bb, cc 这里跳过 bb, 需要 undefined 占位置
test(1, null, 2) // aa, bb, cc 这里 bb 是null, 不会是默认值
test(1, 2, 3) // aa, bb, cc
