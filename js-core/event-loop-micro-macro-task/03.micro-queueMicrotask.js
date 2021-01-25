console.log('sync 1-1')

queueMicrotask(function () {
  console.log('queueMicrotask 1-1')
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
