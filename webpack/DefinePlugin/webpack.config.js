var webpack = require('webpack');

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
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      compress:{
        drop_debugger: false,
        conditionals: false,
        drop_console: false,
      }
    })
  ],
}


/*

定义 free variable, 相当于全局变量, 随处可用

*/
