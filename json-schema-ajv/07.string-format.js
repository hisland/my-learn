const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'string',
      format: 'ipv4',
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
  console.log(`\n 2 192.168.1.1`)
  const valid = validate({ foo: '192.168.1.1' })
  console.log(valid)
  console.log(validate.errors)
}
