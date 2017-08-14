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
// http://es6.ruanyifeng.com/#docs/promise
// 这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务

*/
