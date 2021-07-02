console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    assetNames: 'files/[name]-[hash]',
    bundle: true,
    loader: { '.jpg': 'file' },
    outdir: 'out',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
