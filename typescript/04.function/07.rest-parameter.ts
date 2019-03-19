// 剩余参数, 只能作为最后一个参数
// rest 参数 也相当于 optional, 如果没有它也是数组,只是空数组

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')

// 函数签名如下
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

export const preventVSCodeError = 1
