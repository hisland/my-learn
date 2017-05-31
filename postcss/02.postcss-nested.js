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

const nested = require('postcss-nested')
;(function() {
  let processor = postcss([nested])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
        display:flex;
      }
    }
  `)
  console.log('使用了 postcss-nested:')
  console.log(obj.css)
})()
