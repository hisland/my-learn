class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number) { // 自动推导出 返回类型 this
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
  // ... other operations go here ...
}

let v1 = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue()

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
  .multiply(5)
  .sin()
  .add(1)
  .currentValue()
