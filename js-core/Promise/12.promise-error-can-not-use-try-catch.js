console.log(1)
const kk = new Promise(function (resolve, reject) {
  resolve('val')
})
console.log(2)

try {
  kk.then(function (rs) {
    console.log(rs)
    throw Error('god') // 这会报 UnhandledPromiseRejectionWarning 错误
  })
} catch (error) {
  console.log('catch', error) // 没有执行
}
console.log(3)
