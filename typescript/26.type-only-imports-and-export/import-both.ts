import { Hello } from './export-some-thing'
import { Foo } from './export-some-thing'

const obj1: Hello = { foo: 'abc', bar: '12' } // 拿到 Hello 类型

console.log(obj1)
console.log(Hello) // 拿到 Hello 值

const foo2: Foo = { foo: 'abc', bar: '12' } // 拿到 Foo 类型

console.log(foo2)
console.log(Foo) // 拿不到 Foo 值, 因为只 export 了类型
