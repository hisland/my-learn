let tt = 0
beforeAll(function(done) {
  console.log(1, tt++)
  setTimeout(function() {
    console.log(3, tt++)
    done()
  }, 500)
})

describe('pp', () => {
  test('sub1', () => {
    console.log('sub1', tt++)
    expect(3).toBe(3)
  })
  test('sub2', () => {
    console.log('sub2', tt++)
    expect(3).toBe(3)
  })
})
