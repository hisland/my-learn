function buildName1(firstName: string, lastName?: string) {
  // ...
}

function buildName2(firstName: string, lastName = 'Smith') {
  // ...
}

// 共享同样的类型(firstName: string, lastName?: string) => string。
// 默认参数的默认值消失了，只保留了它是一个可选参数的信息
