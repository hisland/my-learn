module.exports = app => {
  console.log('plugin app 1')

  app.beforeStart(() => {
    console.log('plugin beforeStart 1')
  })
}
