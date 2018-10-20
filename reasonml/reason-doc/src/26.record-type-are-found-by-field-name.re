type person = {
  age: int,
  name: string,
};
type monster = {
  age: int,
  hasTentacles: bool,
};

/* reason 认为 entiry 的 type 是 monster */
let getAge = entity => entity.age;

let kraken = {age: 9999, hasTentacles: true};

/* me 的 type 是 person */
let me = {age: 5, name: "Baby Reason"};

getAge(kraken);

/* error */
getAge(me);
