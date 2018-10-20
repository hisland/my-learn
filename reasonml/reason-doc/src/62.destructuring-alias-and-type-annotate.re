let someInts = (10, 20);
let (ten, twenty) = someInts;

type person = {
  name: string,
  age: int,
};
let somePerson = {name: "Guy", age: 30};

let {name: n, age: a} = somePerson;

let (ten: int, twenty: int) = someInts;
let {name: (n: string), age: (a: int)} = somePerson;
