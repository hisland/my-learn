console.log('sync 1-1')
;(async function () {
  console.log('async 1-1')

  await new Promise((resolve, reject) => {
    console.log('newPromise 1')
    resolve()
  })
    .then(function () {
      console.log('Promise 1-1')
    })
    .then(function () {
      console.log('Promise 2-1')
    })
    .then(function () {
      console.log('Promise 3-1')
    })

  console.log('async 1-2')
})()

console.log('sync 1-2')
