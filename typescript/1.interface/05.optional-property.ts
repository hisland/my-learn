interface Hello{
  god?: string; // 在普通属性末尾加个?
  please?: string;
}

let aa1: Hello = {god: 7} // 类型不匹配
let aa2: Hello = {god: '7'} // 存在的匹配, 忽略的ok
let aa3: Hello = {god: '7', please: 'ok'} // 存在的匹配, 忽略的ok
let aa4: Hello = {god: '7', please: 'ok', more: 8} // 多余的不行
