## 理解

- saga 感觉是一个 generator 函数
- generator 会自动开始执行
- generator 内部可以 yield 的东西
  - 普通内容, 按表达式直接执行
  - promise, 会等待它 resolve, 此时被卡住, 结束之前都不处理其它事情, 通常包装成 `call`, 便于测试
  - 另一个 generator, 会递归的自动开始执行, 通常包装成 `call`, 便于测试
  - 声明式 effect, 按照 声明式 定义的方式执行, 比如:
    - `call`/`apply` 阻塞调用某个函数, 可以是 `promise`/`generator`
    - `fork`/`cancel` 非阻塞调用,取消某个 `fork`
    - `all` 并行执行多个 saga, 等待全部返回
    - `race` 并行执行多个 saga, 竞赛只取最先返回的, 其余取消
    - `cps` 处理 node 风格的回调函数, 比如 `fs.readFile`
    - `take` 等待某一个 action 发生, `*` 是全部
    - `put` 用于 dispatch action 给 redux
    - `takeEvery`/`takeLatest` 像是基于 `take`/`fork` 实现的
    - `cancelled` 放在 `finally` 区块里面

## 使用

saga 只有一个入口, 如果有多个需要在入口里面使用 `all`

使用 `sagaMiddleware.run(rootSaga)` 启动入口

如果没有 `yield` 会自动执行然后退出
如果没有 `循环 yield` 一个一个执行完就退出了
如果有 `循环 yield`, 会一直处理 `yield` 的内容
