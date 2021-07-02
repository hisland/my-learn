console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js', 'bb.js'],
    entryNames: '[name]-[hash]',
    outdir: 'out',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
