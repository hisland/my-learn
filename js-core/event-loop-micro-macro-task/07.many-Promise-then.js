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

console.log('sync 2')
