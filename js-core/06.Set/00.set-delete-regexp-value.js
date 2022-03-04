const obj = /aa/

{
  console.log('1-------------正常删除')
  const aa = new Set([obj])

  console.log(aa)
  aa.delete(obj)
  console.log(aa)
}

{
  console.log('2-------------无法删除')
  const aa = new Set([/aa/]) // 这里 /aa/ 是新对象, 虽然和 obj 一样, 但是引用不同

  console.log(aa)
  aa.delete(obj) // 引用不同, 没有删除
  console.log(aa)
}
