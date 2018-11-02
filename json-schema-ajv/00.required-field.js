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
const valid = validate({
})

console.log(valid)
if (!valid) {
  console.log(validate.errors)
}
