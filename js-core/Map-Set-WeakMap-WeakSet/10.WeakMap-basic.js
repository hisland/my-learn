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
  // const mm2 = new WeakMap([['bb', oo]]) // 原始类型不能作为 key

  console.log(mm.has(oo))
  console.log(mm.get(oo))
}
