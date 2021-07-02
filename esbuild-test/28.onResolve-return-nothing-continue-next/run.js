console.log(1)

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    // filter 正则是 go 的正则 https://golang.org/pkg/regexp/
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve1-1', args)
      // return {} // 这里没有返回值, 进入下一个 onResolve
    })
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve1-2', args)
      // return {}
    })

    // 上面 2 个 onResolve 都没有处理, 会调用 esbuild 默认的行为
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
