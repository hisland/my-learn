console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    // bundle: true, // 默认 bundle: false, 只会打包 entryPoints 指定的文件, 不会递归 import 的文件
    outdir: 'out',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
