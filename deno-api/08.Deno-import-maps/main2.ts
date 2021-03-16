import { foo } from 'some/foo.ts'

// 执行 deno run --unstable --import-map import_map2_1.json main2.ts
// 执行 deno run --unstable --import-map import_map2_2.json main2.ts
// 得到的结果不一样

console.log(foo)
