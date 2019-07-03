执行 `../node_modules/.bin/babel -d out aa.js bb.js` 再查看 out 里面的内容
`{ "modules": "amd" }` 得到的是 转换成 amd 形式的代码
`{ "modules": "auto" }` 这是默认设置, 得到的是 转换成 cjs 形式的代码
`{ "modules": false }` 得到的是 es-module 原样的代码, 即不转换
