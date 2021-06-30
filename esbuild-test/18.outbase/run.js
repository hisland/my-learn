console.log(1)

require('esbuild')
  .build({
    entryPoints: ['src/some/sub1/aa.jsx', 'src/some/sub2/bb.jsx'],
    minify: true,
    outdir: 'out',
    outbase: 'src', // 根据 entryPoints 计算得出的是 src/some, 这里强制改成 src
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
