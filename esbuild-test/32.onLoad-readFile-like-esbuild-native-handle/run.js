console.log(1)
const path = require('path')
const fs = require('fs')

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve1-1', args)
    })

    build.onLoad({ filter: /.*/ }, async (args) => {
      console.log('onLoad1-1', args)
      let text = await fs.promises.readFile(args.path, 'utf8') // 相当于代替 esbuild 干了读取的事
      return {
        contents: text,
      }
    })
  },
}

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    outfile: 'out.js',
    bundle: true,
    plugins: [examplePlugin1],
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
