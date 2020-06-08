export const preventVSCodeError = 1

{
  let s1 = Symbol()
  let s2 = Symbol()
  console.log(s1 === s2) // false
}

{
  let s1 = Symbol('key')
  let s2 = Symbol('key')
  console.log(s1 === s2) // false
}

{
  const sym = Symbol()

  let obj = {
    [sym]: 'value',
  }

  console.log(obj[sym]) // "value"
}

{
  const getClassNameSymbol = Symbol()

  class cc {
    [getClassNameSymbol]() {
      return 'call cc'
    }
  }

  let c1 = new cc()
  console.log(c1[getClassNameSymbol]()) // "Ccall cc
}
