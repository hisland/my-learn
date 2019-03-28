test('resolve-resolves ok', () => {
  return expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('halo')
      }, 100)
    })
  ).resolves.toBe('halo')
})

test('reject-resolves fail', () => {
  return expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        reject('halo')
      }, 100)
    })
  ).resolves.toBe('halo')
})

test('resolve-rejects fail', () => {
  return expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('halo')
      }, 100)
    })
  ).rejects.toBe('halo')
})

test('reject-rejects ok', () => {
  return expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        reject('halo')
      }, 100)
    })
  ).rejects.toBe('halo')
})
