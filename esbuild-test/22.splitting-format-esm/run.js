console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js', 'bb.js'],
    bundle: true,
    splitting: true,
    format: 'esm',
    outdir: 'out',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
