const fs = require('fs')
const postcss = require('postcss')
const salad = require('postcss-salad')
;(function() {
  let processor = postcss([
    salad({
      features: {
        bem: {
          shortcuts: {
            component: 'b',
            modifier: 'm',
            descendent: 'e',
          },
          separators: {
            descendent: '__',
            modifier: '--',
          },
        },
      },
    }),
  ])
  let obj = processor
    .process(fs.readFileSync('./main.css') )
    .then(function(rs) {
      console.log('使用了 postcss-bem, 有2个出不来, 不知道为什么')
      console.log('靠, 版本问题, postcss 6.x 不行, postcss 5.x可以')
      console.log('更新到 postcss-salad@2.0.1, postcss 6.x 可以了')
      console.log(rs.css)
    })
})()
