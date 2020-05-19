{
  const reg = /some/g

  const str = 'some and some'

  console.log(reg.exec(str))
  console.log(reg.exec(str)) // 这个继续匹配下一段了
}

{
  const reg = /some/g

  const str = 'some and some'
  console.log(reg.exec(str))
  reg.lastIndex = 0 // 重置开始位置
  console.log(reg.exec(str)) // 重新开始
}
