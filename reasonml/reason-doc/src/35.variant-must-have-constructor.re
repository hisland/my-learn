/* 不能这样 */
/* type foo = int | string */

/* 这样才对 */
type foo =
  | Int(int)
  | String(string);
