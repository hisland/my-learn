const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile({
  properties: {
    productId: {
      description: 'The unique identifier for a product',
      type: 'integer',
    },
  },
  required: ['productId'],
})
{
  console.log(`\n 1 required`)
  const valid = validate({})
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2 ok`)
  const valid = validate({ productId: 3 })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 3 type error`)
  const valid = validate({ productId: 'halo' })
  console.log(valid)
  console.log(validate.errors)
}
