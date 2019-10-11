console.log('sync 1')
setImmediate(function() {
  console.log('setImmediate')
})
setTimeout(function() {
  console.log('setTimeout 0')
}, 0)
setTimeout(function() {
  console.log('setTimeout 1')
}, 1)
setTimeout(function() {
  console.log('setTimeout 5')
}, 5)
setTimeout(function() {
  console.log('setTimeout 20')
}, 20)
process.nextTick(function() {
  console.log('process.nextTick')
})
new Promise(function(resolve, reject) {
  console.log('promise 1')
  resolve()
  console.log('promise 2')
})
  .then(function() {
    console.log('then 1')
  })
  .then(function() {
    console.log('then 2')
    process.nextTick(function() {
      console.log('then 3 process.nextTick')
    })
    console.log('then 3')
  })
console.log('sync 2')
