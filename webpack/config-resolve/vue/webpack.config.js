module.exports = {
  entry: './a',
  resolve: {
    extensions: ['', '.vue', '.js']
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  }
}

