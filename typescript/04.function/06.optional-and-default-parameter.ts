// 只能2个参数, 多1个少1个都不行
function buildName1(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let result11 = buildName1('Bob') //error, too few parameters
let result12 = buildName1('Bob', 'Adams', 'Sr.') //error, too many parameters
let result13 = buildName1('Bob', 'Adams') //ah, just right

// 1个或者2个参数, 第2个参数可选, 3个太多
function buildName2(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let result21 = buildName2('Bob') //works correctly now
let result22 = buildName2('Bob', 'Adams', 'Sr.') //error, too many parameters
let result23 = buildName2('Bob', 'Adams') //ah, just right

// 1个或者2个参数, 第2个参数无则使用默认值Smith, 3个太多
function buildName3(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

let result31 = buildName3('Bob') //works correctly now, also
let result32 = buildName3('Bob', 'Adams', 'Sr.') //error, too many parameters
let result33 = buildName3('Bob', 'Adams') //ah, just right

//参数顺序 require, [optional | default]
// default 是 optional只是有默认值而已

export const preventVSCodeError = 1
