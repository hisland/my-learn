const postcss = require('postcss')
const autoreset = require('postcss-autoreset')
;(function() {
  let processor = postcss([
    autoreset({
      reset: {
        margin: 0,
        padding: 0,
      },
    }),
  ])
  let obj = processor
    .process(
      `
    .wrap{
      display:flex;
      margin: 1px;
    }
  `
    )
    .then(function(rs) {
      console.log('使用了 postcss-autoreset: 没搞懂')
      console.log(rs.css)
    })
})()
