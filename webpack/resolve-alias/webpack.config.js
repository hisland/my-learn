module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'jquery': '../../bower_components/jquery/dist/jquery.js'
    }
  }
}
