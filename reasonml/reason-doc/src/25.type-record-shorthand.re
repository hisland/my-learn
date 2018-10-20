type horsePower = {
  power: int,
  metric: bool,
};

let metric = true;
let someHorsePower = {power: 10, metric};
/* same as the value {power: 10, metric: metric}; */

type car = {
  name: string,
  horsePower,
};
/* same as the type {name: string, horsePower: horsePower}; */
