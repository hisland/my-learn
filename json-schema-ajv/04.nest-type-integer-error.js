const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'array',
      items: {
        type: 'integer'
      }
    },
  },
})
const valid = validate({
  foo: [1, 'a'],
})

console.log(valid)
if (!valid) {
  console.log(validate.errors)
}
