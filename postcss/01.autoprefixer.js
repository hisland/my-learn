const postcss = require('postcss')
;(function() {
  let processor = postcss()
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
      }
    }
  `)
  console.log('没有任何插件, 原样输出')
  console.log(obj.css)
})()

const autoprefixer = require('autoprefixer')
;(function() {
  let processor = postcss([autoprefixer])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
      }
    }
  `)
  console.log('使用了 autoprefixer:')
  console.log(obj.css)
})()
;(function() {
  let processor = postcss([
    autoprefixer({ browsers: ['Last 2 versions', 'IE 8'] }),
  ])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
      }
    }
  `)
  console.log('使用了 autoprefixer-with-option: ')
  console.log(obj.css)
})()

