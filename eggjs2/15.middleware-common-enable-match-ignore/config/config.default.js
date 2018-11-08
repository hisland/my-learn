'use strict'

console.log('load config root')

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541640109567_7275'

  config.security = {
    csrf: false, // 暂时关闭 csrf
  }

  // add your config here
  config.middleware = ['mm']
  config.mm = {
    // enable: false,
    // match: ['/abc', '/def'], // or 关系
    // match: /^\/(abc|def)/,
    match: function(ctx) {
      return /^\/(abc|def)/.test(ctx.url)
    },

    aa: '11 config in config.default.js',
  }

  return config
}
