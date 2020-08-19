{
  const mm = new WeakMap()

  const oo = {}

  mm.set(oo, 'bb')
  console.log(mm.has(oo))
  console.log(mm.get(oo))
}

{
  const oo = {}
  const mm = new WeakMap([[oo, 'bb']])

  console.log(mm.has(oo))
  console.log(mm.get(oo))
}
