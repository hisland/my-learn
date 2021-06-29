console.log(1)

require('esbuild')
  .build({
    entryPoints: ['main.jsx'],
    bundle: true,
    outfile: 'out3.js',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
