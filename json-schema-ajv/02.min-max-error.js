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
const valid = validate({
  productId: -1,
})

console.log(valid)
if (!valid) {
  console.log(validate.errors)
}
