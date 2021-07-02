console.log(1)

require('esbuild')
  .build({
    entryPoints: ['aa.jsx'],
    banner: {
      js: `
// 这是一大段注释 在开头
//
//
// 这是一大段注释 在开头`,
    },
    footer: {
      js: `
// 这是一大段注释 在结尾
//
//
// 这是一大段注释 在结尾`,
    },
    outfile: 'out.js',
  })
  .then((rs) => {
    console.log('done', rs)
  })
  .catch(() => process.exit(1))

console.log(2)
