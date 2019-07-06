// 对象字面量, 在生成的地方, 才使用变量的值

let aa = Math.random()

function bb() {
  return {
    aa: aa,
  }
}

console.log(bb()) // aa 使用第一次的值
aa = Math.random()
console.log(bb()) // aa 使用新值 第1次
aa = Math.random()
console.log(bb()) // aa 使用新值 第2次

let aa = {}
function bb() {
  return {
    aa: aa,
  }
}

console.log((aa = bb())) //
console.log((aa = bb())) //
console.log((aa = bb())) // 每次生成的时候, 都指向aa的最新引用
