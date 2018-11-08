console.log('load middleware pluginFoo')

module.exports = options => {
  console.log('pluginFoo init config: ', options)
  return async function pluginFoo(ctx, next) {
    console.log('before pluginFoo', options.aa)
    await next()
    console.log('after pluginFoo', options.aa)
  }
}
