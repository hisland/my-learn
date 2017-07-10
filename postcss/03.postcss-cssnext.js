const postcss = require('postcss')

const cssnext = require('postcss-cssnext')
;(function() {
  let processor = postcss([cssnext()])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
        display:flex;
      }
    }
  `)
  console.log('使用了 postcss-cssnext: 自动包含 autoprefixer 和其它的插件')
  console.log(obj.css)
})()
