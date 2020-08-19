{
  const mm = new Map()

  mm.set('aa', 'bb')
  console.log(mm.get('aa'))
  console.log(mm.has('aa'))

  mm.set(Date, Number)
  console.log(mm.get(Date))
  console.log(mm.has(Date))

  console.log(mm.has('not'))
}
