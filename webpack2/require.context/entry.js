let someContext1 = require.context('./sub') // 默认递归子文件
let someContext2 = require.context('./sub', false) // 不加载子文件夹
let someContext3 = require.context('./sub', true, /cc/) // 过滤文件

console.log(someContext1.keys())
console.log(someContext2.keys())
console.log(someContext3.keys())

someContext1.keys().forEach(someContext1) // 循环找到的文件, 并 require 它们

// 由于 webpack 内置了缓存, 所以对于同一个文件的2种引用, 实际只执行1次
// 比如 './aa' 和 './aa.js'

// 查看 dist/bundle.js 来对比打包前后变化
