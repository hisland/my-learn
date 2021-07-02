console.log(1)

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    console.log(3)
    build.onResolve({ filter: /.*/ }, (args) => {
      console.log('onResolve', args)
      return {
        path: args.path,
        namespace: 'new-ns',
      }
    })
    console.log(4)

    build.onLoad({ filter: /.*/, namespace: 'new-ns' }, (args) => {
      console.log('onLoad1', args)
      return {
        contents: 'const hello = 3; console.log(hello)',
      }
    })
    console.log(5)
  },
}

console.log('1-1')

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
