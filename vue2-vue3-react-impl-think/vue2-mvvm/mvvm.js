const { Observe } = require('./observe')

function MVVM($options) {
  const data = (this._data = $options.data)
  this.$options = $options

  Observe(data)

  Object.keys(data).forEach((key) => this._proxy(key))
}
MVVM.prototype = {
  // proxy vm.xxx -> data.xxx
  _proxy(key) {
    const me = this
    Object.defineProperty(me, key, {
      enumerable: true,
      configurable: false,
      get() {
        return me._data[key]
      },
      set(newVal) {
        me._data[key] = newVal
      },
    })
  },
}
