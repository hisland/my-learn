function Observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
}

let DepTarget
function defineReactive(data, key, val) {
  const dep = new Dep()
  Observe(val) // 值是数组时候的劫持 push/pop/shift/unshift...
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get() {
      DepTarget && dep.addSub(DepTarget)
      return val
    },
    set(newVal) {
      if (data && typeof data === 'object') {
        Observe(newVal)
      }
      val = newVal
      dep.notify()
    },
  })
}

function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  notify() {
    // for (const sub of this.subs) {
    //   // 不知道为什么 for-of 会导致无限循环
    //   console.log(111)
    //   sub.update()
    // }
    this.subs.forEach((sub, index1) => {
      sub.update()
    })
  },
}

function Watcher(vm, fnOrExp, cb) {
  this.vm = vm
  this.fnOrExp = fnOrExp
  this.cb = cb

  this.value = this.get()
}
Watcher.prototype = {
  update() {
    this.run() // 缓冲 run
  },
  run() {
    const newVal = this.get()
    const oldVal = this.value
    if (newVal !== oldVal) {
      this.value = newVal
      this.cb.call(this.vm, newVal, oldVal)
    }
  },
  get() {
    DepTarget = this
    const value = this.vm[this.fnOrExp]
    DepTarget = null
    return value
  },
}

exports.Observe = Observe
exports.Dep = Dep
exports.Watcher = Watcher
