console.log('sync 1-1')

setTimeout(function () {
  console.log('setTimeout 1-1')
})

Promise.resolve().then(function () {
  console.log('Promise 1-1')
})

process.nextTick(function () {
  console.log('process.nextTick 1-1')
})

setTimeout(function () {
  console.log('setTimeout 1-2')
})

Promise.resolve().then(function () {
  console.log('Promise 1-2')
})

process.nextTick(function () {
  console.log('process.nextTick 1-2')
})

console.log('sync 1-2')
