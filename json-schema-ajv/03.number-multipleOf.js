const Ajv = require('ajv')
const ajv = new Ajv()
const validate1 = ajv.compile({
  properties: {
    foo: {
      type: 'number',
      multipleOf: 3,
      description: 'The unique identifier for a product',
    },
  },
})
{
  console.log(`\n 1 number 0`)
  const valid = validate1({ foo: 0 })
  console.log(valid)
  console.log(validate1.errors)
}

{
  console.log(`\n 2 number 2`)
  const valid = validate1({ foo: 2 })
  console.log(valid)
  console.log(validate1.errors)
}


{
  console.log(`\n 2 number 3`)
  const valid = validate1({ foo: 3 })
  console.log(valid)
  console.log(validate1.errors)
}
