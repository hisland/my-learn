console.log('sync 1')

new Promise((resolve, reject) => {
  console.log('newPromise 2') // 这里是同步执行的
  resolve()
})
  .then(function () {
    console.log('Promise 5')
  })
  .then(function () {
    console.log('Promise 7')
  })
  .then(function () {
    console.log('Promise 9')
  })

new Promise((resolve, reject) => {
  console.log('newPromise 3') // 这里是同步执行的
  resolve()
})
  .then(function () {
    console.log('Promise 6')
  })
  .then(function () {
    console.log('Promise 8')
  })
  .then(function () {
    console.log('Promise 10')
  })

console.log('sync 4')
