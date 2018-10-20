type person = {
  name: string,
  mutable age: int,
};
let baby = {name: "Baby Reason", age: 5};
baby.age = baby.age + 1; /* alter `baby`. Happy birthday! */
