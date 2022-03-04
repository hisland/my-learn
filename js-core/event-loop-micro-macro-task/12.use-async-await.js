console.log('sync 1')
;(async function () {
  console.log('async 2')

  await new Promise((resolve, reject) => {
    console.log('newPromise 3')
    resolve()
  })
    .then(function () {
      console.log('Promise 5')
    })
    .then(function () {
      console.log('Promise 6')
    })
    .then(function () {
      console.log('Promise 7')
    })

  console.log('async 8')
})()

console.log('sync 4')
