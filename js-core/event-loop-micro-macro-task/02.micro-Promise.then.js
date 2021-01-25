console.log('sync 1-1')

Promise.resolve().then(function () {
  console.log('Promise 1-1')
})

Promise.resolve().then(function () {
  console.log('setTimeout 1-2')
  console.log('sync 2-1')
  Promise.resolve().then(function () {
    console.log('setTimeout 2-1')
  })
  console.log('sync 2-2')
})

console.log('sync 1-2')
