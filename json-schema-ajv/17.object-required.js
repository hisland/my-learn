const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'object',
      description: 'The unique identifier for a product',
      required: ['aa'],
    },
  },
})

{
  console.log(`\n 1`)
  const valid = validate({ foo: { aa: 1 } })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2`)
  const valid = validate({ foo: { bb: 2 } })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 3`)
  const valid = validate({ foo: { cc: 3 } })
  console.log(valid)
  console.log(validate.errors)
}
