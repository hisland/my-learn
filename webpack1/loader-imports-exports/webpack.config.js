module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /cmd-file/, loader: 'imports?val=>{value:123}&$=jquery&this=>window&iamGlobal=>undefined!exports?cc=god&aaa'},
    ]
  },
  resolve: {
    alias: {
      'jquery': '../../bower_components/jquery/dist/jquery.js'
    }
  }
}
