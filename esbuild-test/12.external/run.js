console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    bundle: true,
    // 从结果来看, bundle:true 会把 lodash 当作模块来 require, 具体根据 format 有不同,
    // 但不是全局 global, 这点好像和 webpack 的 externals 不太一样
    // 还可以指定一个文件为 external
    external: ['lodash', './bb.js'],
    outfile: 'out.js',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
