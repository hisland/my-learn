console.log('sync 1')

Promise.resolve().then(function () {
  console.log('Promise 3')
})

Promise.resolve().then(function () {
  console.log('setTimeout 4')
  console.log('sync 5')
  Promise.resolve().then(function () {
    console.log('setTimeout 7')
  })
  console.log('sync 6')
})

console.log('sync 2')
