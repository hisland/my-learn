module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /.css$/, loader: 'style!css'},
      // {test: /.css$/, loaders: ['style', 'css']},  // 这里是 loaders 多了个s
    ]
  }
}
