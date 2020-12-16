const path = require('path')
const fs = require('fs')

function genDirListHtml(list) {
  return `
  <style>
  body{margin:0}
  ul{margin:0}
  a{line-height: 1.5em;}
  a:hover{color:darkcyan}
  </style>
  <ul>
  ${list.map((vv) => `<li><a href="${vv}">${vv}</a></li>`).join('')}
  </ul>`
}

const HandleDirList = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher, // chokidar file watcher instance
}) => {
  app.use(async (ctx, next) => {
    // You can do pre-processing here - this will be the raw incoming requests
    // before vite touches it.
    console.log(ctx.path)

    if (ctx.path.endsWith('/')) {
      const pwd = path.join(__dirname, ctx.path)
      const list1 = fs.readdirSync(pwd, {
        withFileTypes: true,
      })

      const hasIndex = list1.some((vv) => vv.name === 'index.html')
      if (hasIndex) {
        ctx.body = fs.readFileSync(path.join(pwd, 'index.html'), 'utf8')
      } else {
        const list2 = list1.map((file) => {
          if (file.isDirectory()) {
            return file.name + '/'
          } else {
            return file.name
          }
        })
        ctx.body = genDirListHtml(list2)
      }
    } else {
      // ...wait for vite to do built-in transforms
      await next()
    }
  })
}

module.exports = {
  configureServer: [HandleDirList],
}
