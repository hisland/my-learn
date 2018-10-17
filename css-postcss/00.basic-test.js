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
