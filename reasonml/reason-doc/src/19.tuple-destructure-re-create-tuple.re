let ageAndName = (24, "Lil' Reason");

/* 通过 解构, 重组生成新的 tuple */
let ageAndName = {
  let (age, name) = ageAndName;
  (25, name);
};
