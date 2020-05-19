{
  const reg = /你是/gs

  const str = `你是 and SOME

some1 and 你是

some and SOME2`

  console.log('s 让 . 可以匹配 包括 \n 在内的所有字符', str.match(reg))
}
