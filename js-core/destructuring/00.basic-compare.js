'use strict'

const foo = ['one', 'two', 'three']
{
  // without destructuring
  const one = foo[0]
  const two = foo[1]
  const three = foo[2]

  console.log(one)
  console.log(two)
  console.log(three)
}
{
  // with destructuring ES6
  const [one, two, three] = foo

  console.log(one)
  console.log(two)
  console.log(three)
}
