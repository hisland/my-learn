var aa = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 300)
})

aa.then(function(rs) {
  console.log('resolve', rs)
  return 456
})
  .then(123)
  .then(function(rs) {
    console.log('then参数 非函数 被直接忽略了, 值往下传: ', rs)
  })

var bb = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3)
  }, 400)
})

function aa1() {
  console.log('我被立即执行得到结果传给then')
  return 'ok'
}
function bb1() {
  return function() {
    return 'i am ok'
  }
}
bb.then(aa1())
  .then(function(rs) {
    console.log('aa1的结果是string被忽略了', rs)
  })
  .then(bb1())
  .then(function(rs) {
    console.log('bb1的结果是函数被使用了', rs)
  })
