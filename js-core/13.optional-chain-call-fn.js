const obj = {
  aa: {
    ee: () => {
      return 'ee'
    },
    cc: null,
  },
}

console.log(obj.aa.ee?.()) // ok
console.log(obj.aa.xx?.().a.b) // xx 是 null, got undefined
console.log(obj.aa.noneExist?.().c.d) // noneExist 不存在, got undefined
