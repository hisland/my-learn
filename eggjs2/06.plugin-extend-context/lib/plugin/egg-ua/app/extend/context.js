console.log('load plugin ua context.js')

module.exports = {
  get ua() {
    return this.get('user-agent')
  },
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i
    return iosReg.test(this.get('user-agent'))
  },
}
