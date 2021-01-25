console.log('sync 1-1')

new Promise((resolve, reject) => {
  console.log('newPromise 1') // 这里是同步执行的
  resolve()
}).then(function () {
  console.log('Promise 1-1')
}).then(function () {
  console.log('Promise 2-1')
}).then(function () {
  console.log('Promise 3-1')
})

new Promise((resolve, reject) => {
  console.log('newPromise 2') // 这里是同步执行的
  resolve()
}).then(function () {
  console.log('Promise 1-2')
}).then(function () {
  console.log('Promise 2-2')
}).then(function () {
  console.log('Promise 3-2')
})

console.log('sync 1-2')
