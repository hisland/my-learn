console.log('run 1')

// 全部 resolve 才 resolve

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run 2')
    resolve('p1')
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
Promise.all([promise1, promise2])
  .then((values) => {
    // promise1 resolve 这里就执行了
    console.log('run 6')
    console.log(values)
    console.log('run 7')
  })
  .catch((reason) => {
    console.log('reason: ', reason)
  })

console.log('run 8')
