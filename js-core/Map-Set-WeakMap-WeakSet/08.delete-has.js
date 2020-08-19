{
  const mm = new Set(['aa', 'bb', 'aa', 'bb', 'cc', 'dd'])

  console.log(mm.has('dd'))
  console.log(mm.values())

  console.log(mm.delete('dd'))
  console.log(mm.values())
}
