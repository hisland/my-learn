type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias // 显示定义
declare function interfaced(arg: Interface): Interface // 显示接口名字

export const preventVSCodeError = 1
