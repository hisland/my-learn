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
      VERSION: '3.14'
    }),
  ],
}
