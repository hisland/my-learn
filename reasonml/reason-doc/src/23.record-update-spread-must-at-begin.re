type person = {
  age: int,
  name: string,
};

let me = {age: 5, name: "Big Reason"};

/* ... 必须在开头 */
let meNextYear = {...me, age: me.age + 1};
