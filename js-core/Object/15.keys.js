'use strict'

{
  let arr = ['a', 'b', 'c']
  console.log(Object.keys(arr)) // console: ['0', '1', '2']
}

{
  // array like object
  let obj = { 0: 'a', 1: 'b', 2: 'c' }
  console.log(Object.keys(obj)) // console: ['0', '1', '2']
}

{
  // mix array like object and
  let obj = ['a', 'b', 'c']
  obj.god = 'ccc'
  console.log(Object.keys(obj)) // console: [ '0', '1', '2', 'god' ]
}

{
  // array like object with random key ordering
  let an_obj = { 100: 'a', 2: 'b', 7: 'c' }
  console.log(Object.keys(an_obj)) // console: ['2', '7', '100']
}

{
  // getFoo is property which isn't enumerable
  let my_obj = Object.create(
    {},
    {
      getFoo: {
        value: function() {
          return this.foo
        },
      },
    }
  )
  my_obj.foo = 1
  console.log(Object.keys(my_obj)) // console: ['foo']
}
