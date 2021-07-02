console.log(1)
const path = require('path')

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    // filter 正则是 go 的正则 https://golang.org/pkg/regexp/
    build.onResolve({ filter: /bb.js$/ }, (args) => {
      console.log('onResolve1-1', args)
      return {
        // path: './cc.js', // 这里可以改成另外一个文件路径, 不传相当于 args.path
        external: true,
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
