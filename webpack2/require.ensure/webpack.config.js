module.exports = {
  entry: {
    bundleamd: './amd',
    bundlecmd: './cmd',
  },
  output: {
    filename: 'dist/[name].js',
    chunkFilename: 'dist/[id].[name].js',
  }
}
