module.exports = {
  entry: ['webpack/hot/dev-server' , './entry.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
