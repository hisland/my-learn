module.exports = {
  entry: {
    bundle1: './entry1.js',
    bundle2: './entry2.js'
  },
  output: {
    filename: '[name].js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  devtool: 'source-map'
}
