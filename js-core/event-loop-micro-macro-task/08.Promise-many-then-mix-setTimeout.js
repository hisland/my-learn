console.log('sync 1')

Promise.resolve()
  .then(function () {
    console.log('Promise 3')
  })
  .then(function () {
    console.log('Promise 5')
  })
  .then(function () {
    console.log('Promise 7')
  })

Promise.resolve()
  .then(function () {
    console.log('Promise 4')
  })
  .then(function () {
    console.log('Promise 6')
  })
  .then(function () {
    console.log('Promise 8')
  })

setTimeout(function () {
  console.log('setTimeout 9')
  console.log('sync 10')
  setTimeout(function () {
    console.log('setTimeout 12')
  })
  console.log('sync 11')
}, 0)

console.log('sync 2')
