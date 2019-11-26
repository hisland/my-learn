const Ajv = require('ajv')
const ajv = new Ajv()

{
  const validate = ajv.compile({
    type: 'string',
  })
  console.log(`\n 1`)
  const valid = validate('aa')
  console.log(valid)
  console.log(validate.errors)
}

{
  const validate = ajv.compile({
    type: 'number',
  })
  console.log(`\n 1`)
  const valid = validate(3)
  console.log(valid)
  console.log(validate.errors)
}

{
  const validate = ajv.compile({
    type: 'boolean',
  })
  console.log(`\n 1`)
  const valid = validate(true)
  console.log(valid)
  console.log(validate.errors)
}
