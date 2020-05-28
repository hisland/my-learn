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
    let aa1: EmptyInterface = null // --strictNullChecks 不行
    console.log(aa1)
  }
  {
    let aa1: EmptyInterface = 'str'
    console.log(aa1)
    console.log(aa1.length) // 不行
    console.log(aa1['length']) // 不行
  }
  {
    let aa1: EmptyInterface = [1, 2, 'a']
    console.log(aa1)
    console.log(aa1.length) // 不行
    console.log(aa1['length']) // 不行
  }
  {
    let aa1: EmptyInterface = { aa: 1, bb: 2 }
    console.log(aa1)
    console.log(aa1.aa) // 不行
    console.log(aa1['aa']) // 不行
  }

  {
    let aa1: EmptyInterface
    aa1 = {
      name: 'aa',
      '1': 'bb',
      cc: 'cc',
    }
    aa1['5'] = 55 // 不行
    aa1['dd'] = 55 // 不行
    aa1.dd = 66 // 不行
    console.log(aa1)
  }
}

export const preventVSCodeError = 1
