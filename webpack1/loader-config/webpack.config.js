module.exports = {
  entry: {
    bundle: './entry.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
    }]
  },
  babel: {
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
    ]
  },
};

