type account =
  | None
  | Instagram(string)
  | Facebook(string, int);
let myAccount = Facebook("Josh", 26);
let friendAccount = Instagram("Jenny");
