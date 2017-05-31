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

const cssnano = require('cssnano')
;(function() {
  let processor = postcss([cssnano()])
  let obj = processor.process(`
    .wrap{
      .box{
        display:flex;
        display:flex;
      }
    }
  `).then(function(rs){
    console.log('使用了 cssnano: 踢重压缩了, 但是语法并没有变')
    console.log(rs.css)
    console.log('map: ', rs.map)
  })
})()
