console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    write: false,
    outfile: 'out.js',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
