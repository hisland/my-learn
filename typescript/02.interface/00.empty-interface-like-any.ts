{
  interface EmptyInterface {}
  {
    let aa1: EmptyInterface = 1
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = true
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = null
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = 'str'
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = [1, 2, 'a']
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = { aa: 1, bb: 2 }
    console.log(aa1)
  }

  {
    let aa1: EmptyInterface
    aa1 = {
      name: 'aa', // 各种随意担任
      '1': 'bb',
      cc: 'cc',
    }
    aa1['5'] = 55
    aa1['dd'] = 55
    console.log(aa1)
  }
}

export const preventVSCodeError = 1
