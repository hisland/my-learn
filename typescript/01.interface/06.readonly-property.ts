interface Hello{
  readonly god: string;
  readonly please: string;
}

let aa2: Hello = {god: '7'} // 存在的匹配, 忽略的ok

console.log(aa2.god)
aa2.god = 'a' // error

// 只读数组
let aa3: ReadonlyArray<number> = [1, 2, 3]
aa3[0] = 4 // error
