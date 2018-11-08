console.log('load middleware foo')

module.exports = options => {
  console.log('foo init config: ', options)
  return async function foo(ctx, next) {
    console.log('before foo', options.aa)
    await next()
    console.log('after foo', options.aa)
  }
}
