var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 300)
})

aa.then(function(rs) {
  console.log('resolve', rs)
  throw 'god'
})
  .then(
    function(rs) {
      console.log('ok: ', rs)
    },
    function(rs) {
      console.log('我捕捉了上个then的异常: ', rs)
      return 'some'
    }
  )
  .then(
    function(rs) {
      console.log('只要上个then没有报异常,就是ok状态: ', rs)
    },
    function(rs) {
      console.log('fail: ', rs)
    }
  )

var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 400)
})

aa.then(function(rs) {
  console.log('-----------------')
  console.log('resolve', rs)
  throw 'god'
})
  .then(function(rs) {
    // 省略了fail函数, 继续向下一个then传递, 直到有处理
    console.log('ok: ', rs)
  })
  .then(
    function(rs) {
      console.log('ok: ', rs)
    },
    function(rs) {
      console.log('传递到我这里了: ', rs)
    }
  )

var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 500)
})

aa.then(function(rs) {
  console.log('-----------------')
  console.log('resolve', rs)
  throw 'god'
})
  .then(function(rs) {
    console.log('ok: ', rs)
  })
  .then(function(rs) {
    console.log('ok: ', rs)
  }) // 一直没有处理, 错误好似被忽略了
