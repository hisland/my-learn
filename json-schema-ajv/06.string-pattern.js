const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'string',
      pattern: '[ab]c',
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
  console.log(`\n 2 hhachh`)
  const valid = validate({ foo: 'hhachh' })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 3 acbc`)
  const valid = validate({ foo: 'acbc' })
  console.log(valid)
  console.log(validate.errors)
}
