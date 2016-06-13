var aa = require('./aa-plugin');
var bb = require('./bb-plugin');

module.exports = {
  entry: './a.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new aa({some: 'how'}),
    new bb(),
  ]
}
