// 这种是嵌套对象
let aa = {
  key1: 'value1',
  key2: {
    subKey2: 'value3'
  }
}

// 这种key直接以 camelCase 连在一起, 避免了嵌套
let bb = {
  key1: 'value1',
  key1SubKey2: 'value3'
}

// mongodb 使用这种方式描述操作, key是path, value是replacer
// 这样替换任意 path 的值, 而不是 merge 到原始值
let cc = {
  key1: 'value1',
  'key1.subKey2': 'value3'
}


// 上述虽然都是说明相同的东西, 但是表达目的却不一样
