## 使用

* ExtractTextPlugin.extract 最终是组织出 'a!b!c' 这样的 loader-chain

* 下面这2个是等价的

  ExtractTextPlugin.extract(['style-loader', 'css-loader'])
  ExtractTextPlugin.extract(['style', 'css'])

  这样会报错 `window is not defined` , 因为 style-loader 会用到window, 我们需要omit它, 或者直接不使用它

  正确姿势应该是

  ExtractTextPlugin.extract('style', 'css!less') // 2个参数, 第一个参数是要omit的loader,
  ExtractTextPlugin.extract('style', ['css', 'less']) // 2个参数, 第一个参数是要omit的loader,
  或者
  ExtractTextPlugin.extract(['css']) // 1个参数,直接当成loader, 没有omit
  ExtractTextPlugin.extract(['css', 'less']) // 1个参数,直接当成loader, 没有omit, 会转换成 'css!less'
  或者
  ExtractTextPlugin.extract('css') // 1个参数,直接当成loader, 没有omit
  ExtractTextPlugin.extract('css!less') // 1个参数,直接当成loader, 没有omit
