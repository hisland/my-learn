type leftOrRight =
  | Left(int)
  | Right(int);

let i = Left(1);

/* magic! */
let Left(v) | Right(v) = i;
