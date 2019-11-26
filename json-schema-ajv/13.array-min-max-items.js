const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'array',
      minItems: 2,
      maxItems: 4,
    },
  },
})

{
  console.log(`\n 1`)
  const valid = validate({ foo: [1, 2] })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2`)
  const valid = validate({ foo: [1, 2, 3, 4, 5] })
  console.log(valid)
  console.log(validate.errors)
}
