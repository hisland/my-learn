import type { Hello } from './export-some-thing'

const obj1: Hello = { foo: 'abc', bar: '12' } // 能拿到 Hello 类型

console.log(obj1)
console.log(Hello) // 拿不到 Hello 值, 因为只 import 了 类型
