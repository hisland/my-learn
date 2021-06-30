console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    metafile: true,
    outfile: 'out.js',
  })
  .then((rs) => {
    console.log('done', rs, rs.metafile)
  })
  .catch(() => process.exit(1))

console.log(2)
