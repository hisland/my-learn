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
    aa: '11 config in config.default.js',
  }

  config.foo = {
    aa: 'foo 11',
  }

  return config
}
