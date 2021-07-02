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
      return {} // 这里返回了对象, 后续所有包括跨组件的 onResolve 都不会再调用
    })
  },
}
let examplePlugin2 = {
  name: 'example2',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve2-1', args)
      // return {} // 上一个返回了{}, 这后面所有的都没有进了
    })
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve2-2', args)
      return {}
    })
  },
}

// onResolve 跨所有组件都是一样的, 按 plugin 执行的顺序依次调用, 直到有返回 OnResolveResult 的才停止

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    outfile: 'out.js',
    bundle: true,
    plugins: [examplePlugin1, examplePlugin2],
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
