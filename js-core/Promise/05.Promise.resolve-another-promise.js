// Resolve另一个promise对象 直接使用那个promise的value
var original = Promise.resolve(true)

var cast = Promise.resolve(original)
cast.then(function(v) {
  console.log(v) // true
})
