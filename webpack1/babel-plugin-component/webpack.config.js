module.exports = {
  entry: './entry.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  externals: {
    vue: 'Vue',
  },
  babel: {
    babelrc: false,
    presets: [
      ['es2015']
    ],
    plugins: [['component', [{
      libraryName: 'element-ui',
      styleLibraryName: 'theme-default'
    }]]]
  }
}

