module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  }
}
