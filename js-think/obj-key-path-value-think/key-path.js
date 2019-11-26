// 这种是嵌套对象
let aa = {
  key1: 'value1',
  key2: {
    subKey2: 'value3',
  },
}

// 这种key直接以 camelCase 连在一起, 避免了嵌套
let bb = {
  key1: 'value1',
  key1SubKey2: 'value3',
}

// 这种key直接以 snake_case 连在一起, 避免了嵌套
let bb = {
  key1: 'value1',
  key1_subKey2: 'value3',
}

// mongodb 使用这种方式描述操作, key是path, value是replacer
// 这样替换任意 path 的值, 而不是 merge 到原始值
let cc = {
  key1: 'value1',
  'key1.subKey2': 'value3',
}

// 上述描述的是相同的东西
// 描述方法不同, 使用方式不同, 达目也不一样
