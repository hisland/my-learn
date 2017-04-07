const path = require('path');

module.exports = {
  entry: {
    main: ['./aa', './bb'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}
