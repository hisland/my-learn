interface Hello {
  label: string
}
function printLabel(labelledObj: Hello) {
  console.log(labelledObj.label)
}

let myObj1 = { size: 10, label: 'Size 10 Object' } // 这个 size 可以
printLabel(myObj1) // 对象引用传递, 类型兼容

printLabel({ size: 10, label: 'Size 10 Object' }) // 对象字面量 会报错

export const preventVSCodeError = 1
