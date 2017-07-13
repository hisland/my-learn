const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  module: {
    rules: [
      {
        test: function() {
          console.log(arguments)
          return true;
        },
        loader: './aa-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
