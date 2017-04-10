var webpack = require("webpack");

module.exports = {
  entry: './entry.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue/, loader: 'vue' }
    ]
  },
  babel: {
    babelrc: false,
    presets: ['es2015']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
      // beautify: true,
      // minimize: true,
      // compress: {
      //   // drop_debugger: false,
      //   // conditionals: false,
      //   // drop_console: false,
      // }
    // })
  ]
}

