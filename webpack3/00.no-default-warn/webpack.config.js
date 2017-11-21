module.exports = {
  context: __dirname,
  entry: {
    bundle: './entry',
  },
  output: {
    filename: 'dist/[name].js',
    chunkFilename: 'dist/[id].[name].js',
  }
}
