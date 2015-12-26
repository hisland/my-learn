module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /cmd-file/, loader: 'imports?jquery'},
    ]
  },
  resolve: {
    alias: {
      'jquery': '../../bower_components/jquery/dist/jquery.js'
    }
  }
}
