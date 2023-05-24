const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    mode: 'development',
    // mode: 'production',
    devtool: false,
    entry: {
      bundle: './main.js',
    },
    output: {
      publicPath: './dist/',
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [],
    },
    plugins: [],
  },
  {
    mode: 'development',
    // mode: 'production',
    devtool: false,
    entry: {
      app1: './app1/main.js',
    },
    output: {
      publicPath: './dist/',
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      library: `app1-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
    },
    module: {
      rules: [],
    },
    plugins: [],
  },
]
