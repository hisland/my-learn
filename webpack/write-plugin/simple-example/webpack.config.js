var aa = require('./aa-plugin');

module.exports = {
  entry: {
    aa: './a.js',
    bb: './b.js',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new aa({some: 'how'})
  ]
}
