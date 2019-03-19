// 参数默认值, 不传或传入 undefined 的时候, 使用默认值
// 位置是有关系的, 不能像js一样, 内部自动将参数位置移动

function buildName(firstName: number, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

let result1 = buildName(7) // works correctly now, returns "Bob Smith"
let result11 = buildName('Bob') // works correctly now, returns "Bob Smith"
let result2 = buildName(7, undefined) // still works, also returns "Bob Smith"
let result3 = buildName(7, 'Adams', 'Sr.') // error, too many parameters
let result4 = buildName(7, 'Adams') // ah, just right

export const preventVSCodeError = 1
