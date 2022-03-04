console.log('sync 1')

setTimeout(function () {
  console.log('setTimeout 3')
})
setTimeout(function () {
  console.log('setTimeout 4')
  console.log('sync 5')
  setTimeout(function () {
    console.log('setTimeout 7')
  })
  console.log('sync 6')
})

console.log('sync 2')
