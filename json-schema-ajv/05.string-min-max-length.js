const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'string',
      minLength: 3,
      maxLength: 5,
      description: 'The unique identifier for a product',
    },
  },
})
{
  console.log(`\n 1 halo`)
  const valid = validate({ foo: 'halo' })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2 halo22`)
  const valid = validate({ foo: 'halo22' })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2 ha`)
  const valid = validate({ foo: 'ha' })
  console.log(valid)
  console.log(validate.errors)
}
