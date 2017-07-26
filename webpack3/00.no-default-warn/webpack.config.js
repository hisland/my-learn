module.exports = {
  entry: {
    bundle: './entry',
  },
  output: {
    filename: 'dist/[name].js',
    chunkFilename: 'dist/[id].[name].js',
  }
}
