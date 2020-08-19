{
  const mm = new Map()

  mm.set('aa', 'bb')
  mm.set(Date, Number)

  console.log(mm.get('aa'))
  console.log(mm.get(Date))
}

{
  const mm = new Map([
    ['aa', 'bb'],
    [Date, Number],
  ])

  console.log(mm.get('aa'))
  console.log(mm.get(Date))
}
