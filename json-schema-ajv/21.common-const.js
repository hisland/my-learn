const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  type: 'string',
  const: 'it',
})

{
  console.log(`\n 1`)
  const valid = validate('aa')
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 1`)
  const valid = validate('bb')
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 1`)
  const valid = validate('it')
  console.log(valid)
  console.log(validate.errors)
}
