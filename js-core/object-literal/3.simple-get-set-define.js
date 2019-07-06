// get set 简写

var cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}

console.log(cart.wheels);
cart.wheels = 5;
console.log(cart.wheels);
