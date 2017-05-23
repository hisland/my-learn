const path = require('path');
const es3ifyPlugin = require('es3ify-webpack-plugin');


module.exports = [{
  context: __dirname,
  entry: './entry.js', // 实际是下面的简写
  // entry: {
  //   main: './entry.js'
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-es3.js'
  },
  plugins: [
    new es3ifyPlugin()
  ]
},{
  context: __dirname,
  entry: './entry.js', // 实际是下面的简写
  // entry: {
  //   main: './entry.js'
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
  ]
}]

