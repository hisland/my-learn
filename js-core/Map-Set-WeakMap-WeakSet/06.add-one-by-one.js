{
  const mm = new Set()

  mm.add('aa')
  mm.add('bb')
  mm.add('aa') // 已经存在
  mm.add('bb') // 已经存在
  mm.add('cc', 'dd') // 一个一个add, dd 直接被忽略了

  console.log(mm.values())
}

{
  const mm = new Set(['aa', 'bb', 'aa', 'bb'])

  console.log(mm.values())
}
