console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    bundle: true,
    outfile: 'out.js',
    platform: 'neutral', // 这个默认是 esm, 查看 https://esbuild.github.io/api/#platform
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
