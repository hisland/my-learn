test('use done', done => {
  setTimeout(() => {
    expect('halo').toBe('halo')
    done()
  }, 500)
})

test('use promise', () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      expect('halo').toBe('halo')
      resolve()
    }, 500)
  })
})
