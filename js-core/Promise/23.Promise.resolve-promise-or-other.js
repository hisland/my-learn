console.log('run 1')

Promise.resolve(Promise.resolve(123))
  .then((rs) => {
    console.log('1 then rs: ', rs)
  })
  .catch((rs) => {
    console.log('1 catch rs: ', rs)
  })

Promise.resolve(Promise.reject(123))
  .then((rs) => {
    console.log('2 then rs: ', rs)
  })
  .catch((rs) => {
    console.log('2 catch rs: ', rs)
  })

Promise.resolve(123)
  .then((rs) => {
    console.log('3 then rs: ', rs)
  })
  .catch((rs) => {
    console.log('3 catch rs: ', rs)
  })

Promise.resolve(new Error(123))
  .then((rs) => {
    console.log('4 then rs: 依然是 then, 只是 rs 是一个 Error 对象', rs)
  })
  .catch((rs) => {
    console.log('4 catch rs: ', rs)
  })

Promise.resolve(() => {
  throw new Error(123)
})
  .then((rs) => {
    console.log('5 then rs: 依然是 then, 得到的是函数', rs)
  })
  .catch((rs) => {
    console.log('5 catch rs: ', rs)
  })

Promise.resolve(
  new Promise((resolve, reject) => {
    // new Promise 里面的 throw 会被 promise catch
    throw new Error('123 throw in new Promise')
  })
)
  .then((rs) => {
    console.log('6 then rs: 依然是 then', rs)
  })
  .catch((rs) => {
    // 执行 catch 块
    console.log('6 catch rs: ', rs)
  })

Promise.resolve(
  (() => {
    // 这个函数立即执行了, 它没有被 try, resolve 并不会接收
    // 会导致后续的代码无法执行
    console.log('run here immediately')
    throw new Error(123)
    console.log('can not run')
  })()
)
  .then((rs) => {
    console.log('7 then rs: 依然是 then', rs)
  })
  .catch((rs) => {
    console.log('7 catch rs: ', rs)
  })

// 这里的代码已经无法正常执行了, 上面报错了
console.log('run 8')
