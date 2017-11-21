## 结论

实测需要3个因素同时开启

* `new webpack.HotModuleReplacementPlugin()`
* `entry 前置加上 hotClient`
* server.js里面加上
  `const hotMiddleware = require('webpack-hot-middleware')(compiler)
  server.use(hotMiddleware)`
