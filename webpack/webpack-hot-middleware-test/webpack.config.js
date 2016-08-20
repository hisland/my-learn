var webpack = require('webpack');


module.exports = {
  entry: ['./a', './entry.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
