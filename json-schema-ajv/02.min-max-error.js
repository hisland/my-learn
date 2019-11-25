const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile({
  properties: {
    productId: {
      description: 'The unique identifier for a product',
      type: 'integer',
      minimum: 0,
      maximum: 10,
    },
  },
  required: ['productId'],
})

{
  console.log(`\n 1 less than`)
  const valid = validate({
    productId: -1,
  })

  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2 more than`)
  const valid = validate({
    productId: 11,
  })

  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 3 ok`)
  const valid = validate({
    productId: 9,
  })

  console.log(valid)
  console.log(validate.errors)
}
