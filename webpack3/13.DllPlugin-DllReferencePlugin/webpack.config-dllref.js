const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = [
  {
    context: __dirname,
    entry: {
      entry3: ['./entry3'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'entry-[name].js',
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        scope: 'halo',
        manifest: require('./dll/entry1-manifest.json'),
      }),
    ],
  },
]
