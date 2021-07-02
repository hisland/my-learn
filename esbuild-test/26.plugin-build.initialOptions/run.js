console.log(1)

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    console.log(build.initialOptions) // 好像就是下面传入 build 的对象
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
