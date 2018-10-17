const postcss = require('postcss')
const bem = require('postcss-bem')
const nested = require('postcss-nested')
;(function() {
  let processor = postcss([
    bem({
      // style: 'bem',
      shortcuts: {
        component: 'b',
        modifier: 'm',
        descendent: 'e',
      },
      separators: {
        descendent: '__',
        modifier: '--',
      },
    }),
    nested(),
  ])
  let obj = processor
    .process(
      `
@component-namespace halo {
  @b some{
    display:flex;

    @modifier qq{
      display: block;
    }

    @e sub{
      height: 100px;
    }

    @when god{
      height: 200px;
    }

    .kk {
      height: 50px;
    }
  }
}
  `
    )
    .then(function(rs) {
      console.log('使用了 postcss-bem, 有2个出不来, 不知道为什么')
      console.log('靠, 版本问题, postcss 6.x 不行, postcss 5.x可以')
      console.log(rs.css)
    })
})()
