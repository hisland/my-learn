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

const cssnext = require('postcss-cssnext')
;(function() {
  let processor = postcss([cssnext()])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
      }
    }
  `)
  console.log('使用了 postcss-cssnext: 自动包含 autoprefixer 和其它的插件')
  console.log(obj.css)
})()
