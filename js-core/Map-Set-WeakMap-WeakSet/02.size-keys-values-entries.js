{
  const mm = new Map()

  mm.set('aa', 'bb')
  mm.set(Date, Number)

  console.log(mm.size)
  console.log(mm.keys())
  console.log(mm.values())
  console.log(mm.entries())
}
