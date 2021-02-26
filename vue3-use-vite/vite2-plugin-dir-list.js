const path = require('path')
const fs = require('fs')

function genDirListHtml(list) {
  return `
  <style>
  a{line-height: 1.8em;}
  a:hover{color:darkcyan}
  </style>
  <ul>
  ${list.map((vv) => `<li><a href="${vv}">${vv}</a></li>`).join('')}
  </ul>`
}

export default function dirListPlugin() {
  return {
    name: 'vite2-plugin-dir-list',
    configureServer({ app }) {
      app.use((req, res, next) => {
        const { url } = req
        const try_pwd = path.join(__dirname, url)
        if (fs.existsSync(try_pwd) && fs.statSync(try_pwd).isDirectory()) {
          const list1 = fs.readdirSync(try_pwd, {
            withFileTypes: true,
          })

          const hasIndex = list1.some((vv) => vv.name === 'index.html')
          if (hasIndex) {
            res.writeHead(301, { Location: path.join(url, 'index.html') })
            res.end()
          } else {
            const list2 = list1.map((file) => {
              if (file.isDirectory()) {
                return file.name + '/'
              } else {
                return file.name
              }
            })
            res.end(genDirListHtml(list2))
          }
        } else {
          next()
        }
      })
    },
  }
}
