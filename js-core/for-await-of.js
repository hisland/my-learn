const list = [
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('11')
    }, 1000)
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('22')
    }, 300)
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('33')
    }, 800)
  }),
]

;(async function() {
  console.log('start')
  console.time('aa')
  for await (const value of list) {
    console.log(value)
  }
  console.timeEnd('aa')
})()
