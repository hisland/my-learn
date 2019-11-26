const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  anyOf: [{ maximum: 3 }, { type: 'integer' }],
})

// anyOf 匹配至少一个规则即可
// 4.5 5.5 2个规则都不匹配
for (const vv of [1.5, 2, 2.5, 3, 4, 4.5, 5.5]) {
  const valid = validate(vv)
  console.log(valid, validate.errors)
}
