type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias // 鼠标指着arg类型: 显示类型定义
declare function interfaced(arg: Interface): Interface // 鼠标指着arg类型: 显示接口名字

export const preventVSCodeError = 1
