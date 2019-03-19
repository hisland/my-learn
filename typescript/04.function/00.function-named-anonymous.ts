// 没有指定类型, 全部推断为 any

// Named function
function add1(x, y) {
  return x + y
}

// Anonymous function
let add2 = function(x, y) {
  return x + y
}

console.log(add1(1, '3'))

export const preventVSCodeError = 1
