{
  const mm = new Map()

  mm.set('aa', 'bb')
  mm.set('cc', 'dd')
  mm.set(Date, Number)
  mm.set('ee', 'ff')

  mm.delete('aa')
  console.log(mm.entries())

  mm.clear()
  console.log(mm.entries())
}
