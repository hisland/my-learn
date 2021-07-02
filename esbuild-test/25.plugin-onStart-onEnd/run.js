console.log(1)

let examplePlugin1 = {
  name: 'example1',
  setup(build) {
    build.onStart(() => {
      console.log('build started 1')
    })
    build.onEnd((result) => {
      console.log(`build ended 1 with ${result.errors.length} errors`)
    })
  },
}

let examplePlugin2 = {
  name: 'example2',
  setup(build) {
    build.onStart(() => {
      console.log('build started 2')
    })
    build.onEnd((result) => {
      console.log(`build ended 2 with ${result.errors.length} errors`)
    })
  },
}

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
