const Ajv = require('ajv')
const ajv = new Ajv()
const validate = ajv.compile({
  allOf: [{ maximum: 3 }, { type: 'integer' }],
})

// allOf 全部匹配才行
// 只有 2,3  2个值匹配所有规则
for (const vv of [1.5, 2, 2.5, 3, 4, 4.5, 5.5]) {
  const valid = validate(vv)
  console.log(valid, validate.errors)
}
