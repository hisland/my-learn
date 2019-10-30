var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 300)
})

aa.then(function(rs) {
  console.log('resolve', rs)
  return 'god'
})
  .then(function(rs) {
    console.log('直接返回字符串: ', rs)
    return 123
  })
  .then(function(rs) {
    console.log('直接返回数字: ', rs)
  })
  .then(function(rs) {
    console.log('无返回值: ', rs)
  })
  .then(function(rs) {
    console.log('继续无返回值: ', rs)
  })
