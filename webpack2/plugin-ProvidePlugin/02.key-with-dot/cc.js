
// 下面结果修改之后 打包, 再查看 dist/main.js

console.log(window.PP) // 必须是 window.PP 才会替换
console.log(PP) // 不会处理

// console.log('not use some') // 没有使用了 some 变量, 结果不会自动注入
