describe('toMatchObject', () => {
  test('less key', () => {
    expect({ halo: 3, foo: 'may' }).toMatchObject({ halo: 3 })
  })
  test('value not eq', () => {
    expect({ halo: 3, foo: 'may' }).toMatchObject({ halo: 4 })
  })
})
