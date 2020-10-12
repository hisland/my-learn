{
  const mm = new WeakSet()

  const oo1 = {}
  const oo2 = {}

  // mm.add('aa') // 只能是对象, 不能是原始类型
  mm.add(oo1)
  mm.add(oo2)

  console.log(mm.has(oo1))
  console.log(mm.delete(oo1))

  console.log(mm.has(oo1))
  console.log(mm.has(oo2))

  // console.log(mm.length) // 没有 length
}
