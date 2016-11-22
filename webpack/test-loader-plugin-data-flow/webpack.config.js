var aa = require('./plugin/aa-plugin');
var bb = require('./plugin/bb-plugin');

module.exports = {
  entry: './a.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new aa({some: 'how'}),
    new bb(),
  ]
}
