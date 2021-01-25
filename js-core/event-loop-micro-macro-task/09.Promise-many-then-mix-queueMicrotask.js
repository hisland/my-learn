console.log('sync 1-1')

Promise.resolve().then(function () {
  console.log('Promise 1-1')
}).then(function () {
  console.log('Promise 2-1')
}).then(function () {
  console.log('Promise 3-1')
})

Promise.resolve().then(function () {
  console.log('Promise 1-2')
}).then(function () {
  console.log('Promise 2-2')
}).then(function () {
  console.log('Promise 3-2')
})

queueMicrotask(function () {
  console.log('queueMicrotask 1-2')
  console.log('sync 2-1')
  queueMicrotask(function () {
    console.log('queueMicrotask 2-1')
  })
  console.log('sync 2-2')
})

console.log('sync 1-2')
