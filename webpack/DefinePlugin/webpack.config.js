var webpack = require('webpack');

console.log(process.env.NODE_ENV);

module.exports = {
  entry: {
    bundle1: './a1',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      TWO: '1+1',
      VERSION: '3.14',
      SOME: false,
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: true,
    //   // minimize: true,
    //   compress: {
    //     drop_debugger: false,
    //     conditionals: false,
    //     drop_console: false,
    //   }
    // })
  ],
}
