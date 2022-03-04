console.log('sync 1')

setImmediate(function () {
  console.log('setImmediate 3')
})
setImmediate(function () {
  console.log('setImmediate 4')
  console.log('sync 5')
  setImmediate(function () {
    console.log('setImmediate 7')
  })
  console.log('sync 6')
})

console.log('sync 2')
