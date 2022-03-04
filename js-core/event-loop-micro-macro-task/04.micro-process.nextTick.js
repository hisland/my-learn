console.log('sync 1')

process.nextTick(function () {
  console.log('process.nextTick 3')
})

process.nextTick(function () {
  console.log('process.nextTick 4')
  console.log('sync 5')
  process.nextTick(function () {
    console.log('process.nextTick 7')
  })
  console.log('sync 6')
})

console.log('sync 2')
