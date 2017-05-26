const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");


const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {

  // 注意 开头,结尾 的 /
  // 大部分情况下和 `output.publicPath`相同
  publicPath: "/dist/",
  stats: {
    colors: true
  },
}))

app.use('/', express.static('./')) // 静态文件由这里提供, webpack 默认不提供

app.listen(9004, function(){
  console.log('listen on 9004')
})

