const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'array',
      items: {
        type: 'integer',
      },
      uniqueItems: true,
    },
  },
})
const valid = validate({
  foo: [1, 2, 1],
})

{
  console.log(valid)
  console.log(validate.errors)
}
