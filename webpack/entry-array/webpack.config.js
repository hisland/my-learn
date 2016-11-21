module.exports = {
  entry: ['./a', './b', './c'], // 按顺序 require, 并且最后一个变成 entry的exports
  output: {
    filename: 'bundle.js'
  }
}
