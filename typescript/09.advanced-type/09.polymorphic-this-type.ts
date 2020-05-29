class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number) {
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this // 这些返回的 this 是多态的
  }
  // ... other operations go here ...
}

let v1 = new BasicCalculator(2).multiply(5).add(1).currentValue()

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value)
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
  // ... other operations go here ...
}

let v2 = new ScientificCalculator(2)
  // ScientificCalculator 并没有定义 multiply,
  // 而它返回的 this 自动指向它的实例了(并不是 BasicCalculator的实例), 后续的 sin 才能正常使用
  // 这即是多态 this 的效果
  .multiply(5)
  .sin()
  .add(1)
  .currentValue()
