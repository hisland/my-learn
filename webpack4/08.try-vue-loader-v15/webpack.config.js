const path = require('path')

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = [
  {
    mode: 'development',
    // mode: 'production',
    devtool: false,
    entry: {
      bundle: './entry',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
      ],
    },
    plugins: [
      // 请确保引入这个插件！
      new VueLoaderPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: 'initial',
        cacheGroups: {
          vue: {
            test: /\.vue$/,
            minSize: 3,
          }
        },
      },
    },
  },
]
