let tt = 0
beforeAll(function() {
  console.log(1, tt++)
  return new Promise(function(resolve, reject) {
    console.log(2, tt++)
    setTimeout(function() {
      console.log(3, tt++)
      resolve()
    }, 500)
  })
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
