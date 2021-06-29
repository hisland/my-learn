console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.js'],
    bundle: true, // 递归 import 的文件, 最终合并成一个文件
    outdir: 'out',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
