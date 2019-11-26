const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  oneOf: [{ maximum: 3 }, { type: 'integer' }],
})

// oneOf 只能匹配一个规则
// 2, 3 2个规则都匹配了不行
for (const vv of [1.5, 2, 2.5, 3, 4]) {
  const valid = validate(vv)
  console.log(valid, validate.errors)
}
