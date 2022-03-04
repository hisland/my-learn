console.log('sync 1')

queueMicrotask(function () {
  console.log('queueMicrotask 3')
})

queueMicrotask(function () {
  console.log('queueMicrotask 4')
  console.log('sync 5')
  queueMicrotask(function () {
    console.log('queueMicrotask 7')
  })
  console.log('sync 6')
})

console.log('sync 2')
