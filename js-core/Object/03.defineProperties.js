// 根据 defineProperty 指设置属性
// syntax: Object.defineProperties(obj, props)
// props 的 enumerable properties, key作为obj的key, value作为objprop描述

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
      },
    }
  )
  console.log('--------------------')
  console.log('enumerable not: ', aa)
}

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        enumerable: true,
      },
    }
  )
  console.log('--------------------')
  console.log('enumerable yes: ', aa)
}

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        enumerable: true,
        writable: true,
      },
    }
  )
  console.log('--------------------')
  console.log('writable before: ', aa)
  aa.prop1 = 3
  console.log('writable after: ', aa)
  aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        enumerable: true,
        writable: false,
      },
    }
  )
  console.log('--------------------')
  console.log('not writable before: ', aa)
  aa.prop1 = 3
  console.log('not writable after: ', aa)
}

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        enumerable: true,
        configurable: true,
      },
    }
  )
  console.log('--------------------')
  console.log('delete yes: ', aa)
  delete aa.prop1
  console.log('delete yes: ', aa)
}

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        enumerable: true,
        configurable: false,
      },
    }
  )
  console.log('--------------------')
  console.log('delete no: ', aa)
  delete aa.prop1
  console.log('delete no: ', aa)
}

{
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        value: 'prop value',
        configurable: false,
        enumerable: true,
      },
    }
  )
  console.log('--------------------')
  Object.defineProperties(aa, {
    prop1: {
      // writable: true, // Error: Cannot redefine property: prop1
    },
  })
  aa.prop1 = 3
  console.log('configurable not: ', aa)
}

{
  let vv = 33
  let aa = Object.defineProperties(
    {},
    {
      prop1: {
        enumerable: true,
        get: function() {
          return vv
        },
        set: function(vv) {
          vv = vv
        },
      },
    }
  )
  console.log('--------------------getter setter')
  console.log(aa)
  console.log('a.prop1: ', aa.prop1)
  aa.prop1 = 55
  console.log('a.prop1: ', aa.prop1)
  console.log('vv: ', vv)
}
