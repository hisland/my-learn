console.log('sync 1')

Promise.resolve().then(function () {
  console.log('Promise 3')
}).then(function () {
  console.log('Promise 8')
}).then(function () {
  console.log('Promise 11')
})

Promise.resolve().then(function () {
  console.log('Promise 4')
}).then(function () {
  console.log('Promise 9')
}).then(function () {
  console.log('Promise 12')
})

queueMicrotask(function () {
  console.log('queueMicrotask 5')
  console.log('sync 6')
  queueMicrotask(function () {
    console.log('queueMicrotask 10')
  })
  console.log('sync 7')
})

setTimeout(function () {
  console.log('setTimeout 13')
  console.log('sync 14')
  setTimeout(function () {
    console.log('setTimeout 16')
  })
  console.log('sync 15')
})

console.log('sync 2')
