const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  properties: {
    foo: {
      type: 'boolean',
      description: 'The unique identifier for a product',
    },
  },
})
{
  console.log(`\n 1 int`)
  const valid = validate({ foo: 1 })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 2 float`)
  const valid = validate({ foo: 1.5 })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 3 string`)
  const valid = validate({ foo: '1.5' })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 4 boolean`)
  const valid = validate({ foo: true })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 5 array`)
  const valid = validate({ foo: ['1.5'] })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 6 object`)
  const valid = validate({ foo: { bar: '1.5' } })
  console.log(valid)
  console.log(validate.errors)
}

{
  console.log(`\n 7 null`)
  const valid = validate({ foo: null })
  console.log(valid)
  console.log(validate.errors)
}
