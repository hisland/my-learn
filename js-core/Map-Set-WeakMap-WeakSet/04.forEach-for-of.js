{
  const mm = new Map()

  mm.set('aa', 'bb')
  mm.set('cc', 'dd')
  mm.set(Date, Number)
  mm.set('ee', 'ff')

  console.log('forEach')
  mm.forEach((vv, key, org) => {
    console.log(vv, key, org)
  })

  console.log('for-of is entries, use destructuring')
  for (const [key, vv] of mm) {
    console.log(key, vv)
  }
}
