let obj1 = {
  say() {
    super.halo()
  },
}
let obj2 = {
  halo() {
    console.log('halo')
  },
}

Object.setPrototypeOf(obj1, obj2)
obj1.say()
