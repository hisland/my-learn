const path = require('path');

console.log(' -- 实测 [hash] 不能和 [chunkhash] 同时使用 --')

module.exports = [{
  entry: {
    bundleaa: './aa',
    bundlebb: './bb',
  },
  output: {
    path: path.join(__dirname, 'dist-chunkhash'),
    filename: '[name]-[chunkhash].js'
  }
}, {
  entry: {
    bundleaa: './aa',
    bundlebb: './bb',
  },
  output: {
    path: path.join(__dirname, 'dist-hash'),
    filename: '[name]-[hash].js'
  }
}]

