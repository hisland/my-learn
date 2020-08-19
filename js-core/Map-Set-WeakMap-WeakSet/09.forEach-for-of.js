{
  const mm = new Set(['aa', 'bb', 'aa', 'bb', 'cc', 'dd'])

  console.log('forEach, value/key 相同')
  mm.forEach((vv, key, org) => {
    console.log(vv, key, org)
  })

  console.log('for-of is value')
  for (const vv of mm) {
    console.log(vv)
  }
}
