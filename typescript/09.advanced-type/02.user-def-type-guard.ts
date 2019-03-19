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

// 每一个成员访问都会报错
// if (pet.swim) {
//   pet.swim()
// } else if (pet.fly) {
//   pet.fly()
// }

// if ((<Fish>pet).swim) {
//   ;(<Fish>pet).swim()
// } else {
//   ;(<Bird>pet).fly()
// }

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

export const preventVSCodeError = 1
