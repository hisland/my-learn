// 看数组中哪个更快完成, 就以那个为结果调用 then

var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, '一')
})
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, '二')
})

Promise.race([p1, p2]).then(function(value) {
  console.log(value) // "二"
  // 两个都解决，但p2更快
})

var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, '三')
})
var p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, '四')
})

Promise.race([p3, p4]).then(
  function(value) {
    console.log(value) // "三"
    // p3更快，所以被解决（resolve）了
  },
  function(reason) {
    // 未被执行
  }
)

var p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, '五')
})
var p6 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, '六')
})

Promise.race([p5, p6]).then(
  function(value) {
    // 未被执行
  },
  function(reason) {
    console.log(reason) // "六"
    // p6更快，所以被拒绝（reject了）
  }
)
