test('resolve ok', async () => {
  const dd = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('halo')
    }, 100)
  })
  expect(dd).toBe('halo')
})

test('reject fail', async () => {
  const dd = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject('halo')
    }, 100)
  })
  expect(dd).toBe('halo')
})

test('resolve-rejects fail', async () => {
  await expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('halo')
      }, 100)
    })
  ).rejects.toBe('halo')
})

test('reject-rejects ok', async () => {
  await expect(
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        reject('halo')
      }, 100)
    })
  ).rejects.toBe('halo')
})
