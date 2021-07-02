console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.css'],
    bundle: true,
    outfile: 'out.css',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
