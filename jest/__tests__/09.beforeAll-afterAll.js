let tt = 0
beforeEach(function() {
  console.log('beforeEach: ', tt++)
})
afterEach(function() {
  console.log('afterEach: ', tt++)
})

beforeAll(function() {
  console.log('beforeAll: ', tt++)
})
afterAll(function() {
  console.log('afterAll: ', tt++)
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
