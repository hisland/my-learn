{
  enum Color {
    Red,
    Green,
    Blue,
  } // 编号默认从 0 开始

  {
    let aa: Color = Color.Green
    console.log(aa) // 1
  }

  console.log(Color)
}

{
  enum Color {
    Red = 1,
    Green,
    Blue,
  } // 从 1 开始

  {
    let aa: Color = Color.Green
    console.log(aa) // 2
  }
  console.log(Color)
}

{
  enum Color {
    Red = 33,
    Green = 55,
    Blue,
  }

  {
    let aa: Color = Color.Green
    console.log(aa) // 2
  }
  console.log(Color)
}

{
  enum Color {
    Red = 33,
    Green = 33, // 这样也可以, 和上面有差异
    Blue,
  }

  {
    let aa: Color = Color.Green
    console.log(aa) // 2
  }
  console.log(Color)
}

{
  enum Color {
    Red,
    Green,
    Blue,
  }

  {
    let aa: typeof Color = Color
    console.log(aa) // 2
    console.log(Color === aa)
  }
  console.log(Color)
}

{
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }

  {
    let aa: Color = Color.Blue
    console.log(aa) // 4
  }
  {
    let aa: string = Color[4] // value 反向得到 key, 同值则得到最后一个定义的
    console.log(aa) // Blue
  }
  console.log(Color) // 查看输出, 是一个key,value都作为key的map
  console.log(Color[5]) // undefined
}

{
  enum Color {
    Red = 'Green',
    Green = 'Blue',
    Blue = 'Red',
  }
  {
    let aa: Color = Color.Blue
    console.log(aa) // Red
  }
  {
    let aa: string = Color['Green'] // key存在, value则不能反查
    console.log(aa) // Blue
  }
  console.log(Color) // 查看输出, 是一个key,value都作为key的map
}

{
  enum Color {
    Red,
    Green,
    Blue,
  }
  console.log(Color) // 查看输出, 是一个key,value都作为key的map
}

{
  enum Color {
    Red = 'Blue',
    3 = 'Green', // key 不能是数字
    Blue = 4,
  }
}

{
  // const enum 不会生成真实的对象, 下面的值直接展开了
  const enum Color {
    Red = 'Blue',
    Blue = 4,
  }

  console.log(Color.Red) // 这里直接展开成 'Blue' 了
}

export const preventVSCodeError = 1
