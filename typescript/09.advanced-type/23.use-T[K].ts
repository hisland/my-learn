export const preventVSCodeError = 1

interface Work {
  addr: string
  title: string
  money: number
}

function getProperty<T, K extends keyof T>(oo: T, propertyName: K): T[K] {
  return oo[propertyName] // o[propertyName] is of type T[K]
}

{
  const obj: Work = {
    addr: 'addr',
    title: 'title',
    money: 100,
  }
  getProperty(obj, 'addr') // string
  getProperty(obj, 'money') // number
}

{
  // 这个是自动推导出来的类型, 不是 Work, 只是长得一样
  getProperty(
    {
      addr: 'addr',
      title: 'title',
      money: 100,
    },
    'addr'
  )
}
