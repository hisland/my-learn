// Resolve另一个promise对象 直接使用那个promise的value
const original = Promise.resolve(true)

console.log(1)
const cast = Promise.resolve(original)
cast.then(function (v) {
  console.log(v) // true
})

console.log(2)
