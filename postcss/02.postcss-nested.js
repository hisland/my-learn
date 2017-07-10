const postcss = require('postcss')

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
