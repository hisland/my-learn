console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    bundle: true,
    loader: { '.js': 'jsx' }, // js 文件当成 jsx 来处理
    outfile: 'out.js',
    inject: ['./react-shim.js'],
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
