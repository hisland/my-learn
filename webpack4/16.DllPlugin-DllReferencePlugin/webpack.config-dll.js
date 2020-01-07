const path = require('path')

const webpack = require('webpack')

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: false,
  entry: {
    aa: ['./src/cc1.js', './src/pkg1/dll1.js'], // 必须是 array
    bb: ['./src/cc2.js', './src/pkg2/dll2.js'], // 必须是 array
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dll-[name].js',
    library: 'dll_[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: 'dll_[name]_[hash]', // 注意需要和  output.library 一致
      path: path.join(__dirname, 'dist/dll-manifest/dll-[name]-manifest.json'),
    }),
  ],
}
