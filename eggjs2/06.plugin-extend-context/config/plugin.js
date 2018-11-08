'use strict'
const path = require('path')
// curl http://127.0.0.1:7001/public/aa.js
// 上面的不能访问

exports.static = {
  enable: false,
}

exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
}
