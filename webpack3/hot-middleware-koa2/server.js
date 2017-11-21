const webpack = require('webpack')
const chalk = require('chalk')
const Koa = require('koa')
const StaticPath = require('koa-static') // 只提供静态文件服务, 不会列出文件列表

const webpackConfig = require('./webpack.config.js')

const app = new Koa()

// 启用压缩
app.use(require('koa-compress')())

const compiler = webpack(webpackConfig)

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  // 注意 开头,结尾 的 /
  // 大部分情况下和 `output.publicPath`相同
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  quiet: true, // 不显示详细信息
  // lazy: true, //请求时才编译包, 如果环境比较慢, 用这个应该好一些
})
app.use(async function(ctx, next) {
  await new Promise(function(resolve, reject) {
    webpackDevMiddleware(
      ctx.req,
      {
        end: function(content) {
          ctx.body = content
          resolve(true)
        },
        setHeader: function(name, value) {
          ctx.set(name, value)
        },
      },
      function() {
        resolve(false)
      }
    )
  }).then(function(isEnd) {
    // 如果 webpack 打包没有相应的地址, 则往后面走
    if (!isEnd) {
      return next()
    }
  })
})

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(async function(ctx, next) {
  await new Promise(function(resolve, reject) {
    ctx.req.on('close', function() {
      resolve(true)
    })
    webpackHotMiddleware(ctx.req, ctx.res, function() {
      resolve(false)
    })
  }).then(function(isEnd) {
    // 如果 webpack 打包没有相应的地址, 则往后面走
    if (!isEnd) {
      return next()
    }
  })
})

// 提供静态资源
app.use(StaticPath(__dirname))

app.use(async function(ctx, next) {
  console.log(chalk.red('\n\nno this file path: ' + ctx.path + '\n\n'))
  await next()
})

app.listen(8080, function() {
  console.log('start')
})
