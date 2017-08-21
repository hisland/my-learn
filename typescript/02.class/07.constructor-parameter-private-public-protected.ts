class Animal {
  constructor(private name: string) {} // 会自动内部生成private name属性
  move(meters: number){
    console.log(this.name, ' moved ' + meters + 'm.');
  }
}

class Animal2 {
  constructor(name: string) {} // 提示没有定义name属性
  move(meters: number){
    console.log(this.name, ' moved ' + meters + 'm.');
  }
}


class Animal3 {
  constructor(public name: string) {} // 会自动内部生成public name属性
  move(meters: number){
    console.log(this.name, ' moved ' + meters + 'm.');
  }
}


class Animal4 {
  constructor(protected name: string) {} // 会自动内部生成protected name属性
  move(meters: number){
    console.log(this.name, ' moved ' + meters + 'm.');
  }
}
