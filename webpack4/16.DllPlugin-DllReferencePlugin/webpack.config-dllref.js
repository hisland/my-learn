const path = require('path')

const webpack = require('webpack')

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: false,
  entry: {
    entry1: ['./src/entry1'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'entry-[name].js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      scope: 'newName1',
      manifest: require('./dist/dll/dll-aa-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      scope: 'newName2',
      manifest: require('./dist/dll/dll-bb-manifest.json'),
    }),
  ],
}
