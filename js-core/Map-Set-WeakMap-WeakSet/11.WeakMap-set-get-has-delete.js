{
  const mm = new WeakMap()

  const oo = {}

  mm.set(oo, 'bb')
  console.log(mm.get(oo))
  console.log(mm.has(oo))
  console.log(mm.delete(oo))
}
