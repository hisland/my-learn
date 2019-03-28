let tt = 0
describe('pp', () => {
  console.log('desc: ', tt++)

  test('sub1', () => {
    console.log('sub1', tt++)
    expect(3).toBe(3)
  })

  describe('pp', () => {
    console.log('desc: ', tt++)

    test('foo1', () => {
      console.log('foo1', tt++)
      expect(3).toBe(3)
    })
    test('foo2', () => {
      console.log('foo2', tt++)
      expect(3).toBe(3)
    })
  })

  test('sub2', () => {
    console.log('sub2', tt++)
    expect(3).toBe(3)
  })
})
