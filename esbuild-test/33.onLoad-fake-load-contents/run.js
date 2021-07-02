console.log(1)
const path = require('path')
const fs = require('fs')

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    build.onResolve({ filter: /.*bb.js/ }, (args) => {
      console.log('onResolve1-1', args)
      return {
        path: args.path,
        namespace: 'fake',
      }
    })

    // 指定 namespace 相当于增加一个过滤条件, 不指定则只匹配 filter
    build.onLoad({ filter: /.*bb.js/ }, async (args) => {
      console.log('onLoad1-1', args)
      return {
        contents: JSON.stringify({ hello: 100, mike: 2 }),
        loader: 'json',
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
