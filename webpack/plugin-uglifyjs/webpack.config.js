var webpack = require("webpack");

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // beautify: true,
      minimize: true,
      compress: {
        drop_debugger: false,
        conditionals: false,
        drop_console: false,
      }
    })
  ]
}

