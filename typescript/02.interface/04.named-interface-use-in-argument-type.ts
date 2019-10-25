interface Hello {
  label: string
}
function printLabel(labelledObj: Hello) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' } // 这个 size 可以
printLabel(myObj)

export const preventVSCodeError = 1
