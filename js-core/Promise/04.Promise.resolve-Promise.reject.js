// 直接成功了
Promise.resolve('hello').then(
  function(rs) {
    console.log('ok: ', rs)
  },
  function(err) {
    console.log('fail: ', err)
  }
)

// 直接失败了
Promise.reject('oh god').then(
  function(rs) {
    console.log('ok: ', rs)
  },
  function(err) {
    console.log('fail: ', err)
  }
)
