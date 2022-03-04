console.log('sync 1')

setTimeout(function () {
  console.log('setTimeout 5')
})

Promise.resolve().then(function () {
  console.log('Promise 4')
})

process.nextTick(function () {
  console.log('process.nextTick 3')
})

console.log('sync 2')
