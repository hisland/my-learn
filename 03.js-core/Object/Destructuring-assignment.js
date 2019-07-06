'use strict'

var foo = ['one', 'two', 'three']
{
  // without destructuring
  var one = foo[0]
  var two = foo[1]
  var three = foo[2]

  console.log(one)
  console.log(two)
  console.log(three)
}
{
  // with destructuring ES6
  var [one, two, three] = foo

  console.log(one)
  console.log(two)
  console.log(three)
}
