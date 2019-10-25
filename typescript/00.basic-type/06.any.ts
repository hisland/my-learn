// 就像普通js声明的变量一样随便赋值, 不会报错
{
  let aa: any = 4
  console.log('ok: ', aa)
  aa = 'god'
  console.log('ok: ', aa)
  aa = true
  console.log('ok: ', aa)
}

{
  // 不指定类型, 类型是 类型推断
  // 查看 http://www.typescriptlang.org/Handbook#type-inference
  let aa = 3 // 不是any类型, 类型推断 出 number
  console.log(aa)
  // aa = 'god'; // 这里编译报错, 但是能生成js
  // console.log(aa);
}

{
  let list: any[] = [1, 'god', true, 'cc']
  console.log(list)
  list[1] = 1000
  console.log(list)
}

{
  // any 和  Object 不一样
  {
    let bb: any = 4
    console.log(bb.toFixed(2)) // ok
  }
  {
    let bb: Object = 4
    console.log(bb.toFixed(2)) // error
  }
}

export const preventVSCodeError = 1
