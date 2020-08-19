{
  const mm = new Set()

  mm.add('aa')
  mm.add('bb')

  console.log(mm.has('aa'))
}

{
  const mm = new Set(['aa', 'bb'])

  console.log(mm.has('aa'))
}
