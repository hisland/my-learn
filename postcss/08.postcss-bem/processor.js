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
      console.log(rs.css)
    })
})()
