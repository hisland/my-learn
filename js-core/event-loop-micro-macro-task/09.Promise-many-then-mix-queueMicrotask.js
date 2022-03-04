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

console.log('sync 2')
