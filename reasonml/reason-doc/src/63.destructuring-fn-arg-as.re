type person = {
  name: string,
  age: int,
};

let someFunction = (~person as {name}) => {/* you can use `name` here */};

let otherFunction = (~person as {name} as thePerson) => {
  /* you can use both `name` and the whole record as `thePerson` here */
};
