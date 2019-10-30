// 废旧的api, 下面2个例子可以等量替换, 不要再使用了

function test() {
  var deferred = Promise.defer()
  doSomething(function cb(good) {
    if (good) deferred.resolve()
    else deferred.reject()
  })
  return deferred.promise
}

function test2() {
  return new Promise(function(resolve, reject) {
    doSomething(function cb(good) {
      if (good) resolve()
      else reject()
    })
  })
}
