'use strict'
// {
//   const pp = new Proxy(1, {
//     set: function(target, name, value, receiver) {
//       console.log('set -----')
//       return true
//     },
//   })
//   console.log(pp)
// }

// {
//   const pp = new Proxy(true, {
//     set: function(target, name, value, receiver) {
//       console.log('set -----')
//       return true
//     },
//   })
//   console.log(pp)
// }

// {
//   const pp = new Proxy('a', {
//     set: function(target, name, value, receiver) {
//       console.log('set -----')
//       return true
//     },
//   })
//   console.log(pp)
// }

// {
//   const pp = new Proxy(undefined, {
//     set: function(target, name, value, receiver) {
//       console.log('set -----')
//       return true
//     },
//   })
//   console.log(pp)
// }

// {
//   const pp = new Proxy(null, {
//     set: function(target, name, value, receiver) {
//       console.log('set -----')
//       return true
//     },
//   })
//   console.log(pp)
// }

{
  const pp = new Proxy(Symbol, {
    set: function(target, name, value, receiver) {
      console.log('set -----')
      return true
    },
  })
  console.log(pp)
}
