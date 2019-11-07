class Bird {
  fly() {}
  layEggs() {}
}

class Fish {
  swim() {}
  layEggs() {}
}

function getSmallPet(): Fish | Bird {
  return Math.random() < 0.5 ? new Fish() : new Bird()
}

let pet = getSmallPet()
pet.layEggs() // 共有成员访问 ok

// 每一个成员访问都会报错, 因为不是共有的
if (pet.swim) {
  pet.swim()
} else if (pet.fly) {
  pet.fly()
}

// 使用类型断言, 但是太过冗余繁杂 <>方式
if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}

// 使用类型断言, 但是太过冗余繁杂, as 方式
if ((pet as Fish).swim) {
  ;(pet as Fish).swim()
} else {
  ;(pet as Bird).fly()
}

// 自定义的类型保护函数, 返回值是 boolean, 但是函数签名标识 arg is Type
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

// 使用 自定义保护函数
if (isFish(pet)) {
  pet.swim() // 分支内不用再断言
} else {
  pet.fly() // 分支内不用再断言
}

// 使用 instanceof保护
if (pet instanceof Fish) {
  pet.swim() // 分支内不用再断言
} else {
  pet.fly() // 分支内不用再断言
}

export const preventVSCodeError = 1
