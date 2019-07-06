// 遍历 数组
let list = ['god', 'say', 4, 'is', true]
for (let vv of list) {
  console.log(vv)
}

// 遍历 字符串
let str = 'hello baby'
for (let vv of str) {
  console.log(vv)
}

// 用于 解构 map
let aa = new Map()
aa.set('a', 'bbb')
aa.set('b', 'ddd')
for (let [key, value] of aa) {
  console.log(key, value)
}
