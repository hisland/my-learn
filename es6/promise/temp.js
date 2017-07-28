var kk = new Promise(function(resolve, reject) {
  console.log(1)
  resolve(2)
})

kk.then(function(rs) {
  console.log(rs)
})

console.log(3)

/*

输出

1
3
2

then 始终是异步的

*/
