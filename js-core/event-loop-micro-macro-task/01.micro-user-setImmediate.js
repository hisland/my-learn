console.log('sync 1-1')

setImmediate(function () {
  console.log('setImmediate 1-1')
})
setImmediate(function () {
  console.log('setImmediate 1-2')
  console.log('sync 2-1')
  setImmediate(function () {
    console.log('setImmediate 2-1')
  })
  console.log('sync 2-2')
})

console.log('sync 1-2')
