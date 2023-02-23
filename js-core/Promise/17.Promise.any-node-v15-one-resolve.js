console.log('run 1')

// 任意一个成功即作为结果成功, 其它的失败全部忽略

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run 2')
    reject('p1')
    console.log('run 3')
  }, 300)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // promise2 最终还是会执行
    console.log('run 4')
    resolve('p2')
    console.log('run 5')
  }, 500)
})
Promise.any([promise1, promise2])
  .then((values) => {
    // promise1 resolve 这里就执行了
    console.log('run 6')
    console.log(values) // 这里是 p2, p1 的错误被忽略了
    console.log('run 7')
  })
  .catch((reason) => {
    console.log('reason: ', reason)
  })

console.log('run 8')
