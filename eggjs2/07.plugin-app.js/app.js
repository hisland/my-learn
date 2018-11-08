module.exports = app => {
  console.log('root app 1')

  app.beforeStart(() => {
    console.log('root beforeStart 1')
  })
}
