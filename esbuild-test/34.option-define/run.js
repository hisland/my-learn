console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    bundle: true,
    define: {
      DEBUG: 'true',
      'SOME.DOT.KEY': '99',
    },
    outfile: 'out.js',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
