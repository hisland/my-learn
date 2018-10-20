type account =
  | Facebook(string, int) /* 2 arguments */;

type account2 =
  | Instagram((string, int)) /* 1 argument - happens to be a 2-tuple */;
