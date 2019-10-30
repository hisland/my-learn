var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 300)
})

aa.then(
  function(value) {
    console.log('resolve 执行then第1个参数: ', value)
  },
  function(value) {
    console.log('reject: ', value)
  }
)

var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(10)
  }, 300)
})

aa.then(
  function(value) {
    console.log('resolve: ', value)
  },
  function(value) {
    console.log('reject 执行then第2个参数: ', value)
  }
)
