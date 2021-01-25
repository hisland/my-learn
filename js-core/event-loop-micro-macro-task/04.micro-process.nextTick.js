console.log('sync 1-1')

process.nextTick(function () {
  console.log('process.nextTick 1-1')
})

process.nextTick(function () {
  console.log('process.nextTick 1-2')
  console.log('sync 2-1')
  process.nextTick(function () {
    console.log('process.nextTick 2-1')
  })
  console.log('sync 2-2')
})

console.log('sync 1-2')
