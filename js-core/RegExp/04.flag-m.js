console.log('m 好像只管  ^$ 这 2 个开始/结尾的处理逻辑')

{
  const reg = /^some/gi

  const str = `some and SOME

some1 and SOME

some and SOME2`

  console.log('没有m相当于处理一行', str.match(reg))
}

{
  const reg = /^some/gim

  const str = `some and SOME

some1 and SOME

some and SOME2`

  console.log('有m相当于处理多行', str.match(reg))
}
