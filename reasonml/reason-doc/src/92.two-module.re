module Some1 = {
  type myResponseVariant =
    | Yes
    | No
    | PrettyMuch;

  let rs = No;
  Js.log(rs);

  switch (rs) {
  | Yes => Js.log('a')
  | No => Js.log('b')
  | PrettyMuch => Js.log('c')
  };
};
module Some2 = {
  type myResponseVariant2 =
    | No
    | Yes
    | PrettyMuch;

  let rs = No;
  Js.log(rs);

  switch (rs) {
  | Yes => Js.log('a')
  | No => Js.log('b')
  | PrettyMuch => Js.log('c')
  };
};
