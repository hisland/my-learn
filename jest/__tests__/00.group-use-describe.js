const sum = require('../src/sum')

describe('pp', () => {
  test('sub', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
