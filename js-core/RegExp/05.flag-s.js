{
  const reg = /SOME.+?some/gs

  const str = `some and SOME

some1 and SOME

some and SOME2`

  console.log('s 让 . 可以匹配 包括 \n 在内的所有字符', str.match(reg))
  console.log('但是有点新, 注意使用')

  console.log(
    `用 [\\s\\S] 这种2个完全互斥的集合的并集, 能达到相同效果 好像是这样`,
    str.match(/SOME[\s\S]+?some/gs)
  )
}
