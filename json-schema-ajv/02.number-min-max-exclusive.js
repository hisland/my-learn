const Ajv = require('ajv')
const ajv = new Ajv()
const validate1 = ajv.compile({
  properties: {
    foo: {
      type: 'number',
      minimum: 1,
      maximum: 5,
      description: 'The unique identifier for a product',
    },
  },
})
{
  console.log(`\n 1 number min`)
  const valid = validate1({ foo: 1 })
  console.log(valid)
  console.log(validate1.errors)
}

{
  console.log(`\n 2 number max`)
  const valid = validate1({ foo: 5 })
  console.log(valid)
  console.log(validate1.errors)
}

const validate2 = ajv.compile({
  properties: {
    foo: {
      type: 'number',
      exclusiveMinimum: 1,
      exclusiveMaximum: 5,
      description: 'The unique identifier for a product',
    },
  },
})
{
  console.log(`\n 1 number min`)
  const valid = validate2({ foo: 1 })
  console.log(valid)
  console.log(validate2.errors)
}

{
  console.log(`\n 2 number max`)
  const valid = validate2({ foo: 5 })
  console.log(valid)
  console.log(validate2.errors)
}
