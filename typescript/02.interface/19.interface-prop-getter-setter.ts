interface Foo {
  value: string
}

{
  let aa: Foo = {
    value: 'aa',
  }
  console.log(aa)
}

{
  let aa: Foo = {
    get value() {
      return 'true' // ok
    },
    set value(val) {
      console.log('set', val) // val's Type is string
    },
  }
  console.log(aa)
  aa.value = '33'
}

{
  let aa: Foo = {
    get value() {
      return true // Type 'boolean' is not assignable to type 'string'
    },
  }
  console.log(aa)
}

export const preventVSCodeError = 1
