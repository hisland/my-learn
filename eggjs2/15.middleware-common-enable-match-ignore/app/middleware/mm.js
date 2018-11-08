console.log('load middleware mm')

module.exports = options => {
  console.log('mm init config: ', options)
  return async function mm(ctx, next) {
    console.log('before mm', options.aa)
    await next()
    console.log('after mm', options.aa)
  }
}
