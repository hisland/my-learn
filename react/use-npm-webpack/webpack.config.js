module.exports = {
  entry: {
    bundle: 'babel?presets[]=react,presets[]=es2015!./test.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
