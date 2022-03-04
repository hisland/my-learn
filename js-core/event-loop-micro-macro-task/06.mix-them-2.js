console.log('sync 1')

setTimeout(function () {
  console.log('setTimeout 7')
})

Promise.resolve().then(function () {
  console.log('Promise 5')
})

process.nextTick(function () {
  console.log('process.nextTick 3')
})

setTimeout(function () {
  console.log('setTimeout 8')
})

Promise.resolve().then(function () {
  console.log('Promise 6')
})

process.nextTick(function () {
  console.log('process.nextTick 4')
})

console.log('sync 2')
