
参考 require.cache, change-required-module
结论是 从一个入口 `node app.js` 里面所有的依赖, 不管谁require, 就缓存了, 除非手工删掉缓存, 否则都指向同一个对象



## 如果你确实想加载2次或多次, 我知道的暂有2种方法

1. 参考 require.cache demo, `delete require.cache[modulePath];`
2. 官方文档指出, 那个模块直接 `module.exports = function(){}`, 然后每次需要的时候, 执行一下那个方法
