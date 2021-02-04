// 只接收一个函数, 处理失败的情况
// 相当于 promise().then(undefined, fn(){})

var p1 = new Promise(function (resolve, reject) {
  resolve('成功')
})

p1.then(function (value) {
  console.log(value) // "成功!"
  throw '哦，不!'
}).catch(function (e) {
  console.log(e) // "哦，不!"
})

p1.then(
  function (value) {
    console.log(value) // "成功!"
    throw '哦，不!' // 这个错误需要后续的 catch 才能捕获, 当前 then 的 第 2 个参数只能捕获之前的错误
  },
  function (e) {
    console.log(e) // "哦，不!"
  }
)
