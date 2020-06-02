{
  let halo: string = 'he'
  console.log(halo)
}
{
  let halo: string = 'dl'
  console.log(halo)
}
{
  let halo = 'dl' // 自动推导 string, 因为 let 可以修改值
  console.log(halo)
}
{
  const halo = 'dl' // const 自动推导, 字面量类型 'dl', 因为 const 不可改
  let halo2 = halo // 字面量类型 赋值给 string  类型兼容
  console.log(halo)
}
{
  let halo: 'dl' = 'dl' // 字面量类型 'dl'
  halo = 'some' // string 赋值给 字面量类型  不兼容
  console.log(halo)
}

export const preventVSCodeError = 1
