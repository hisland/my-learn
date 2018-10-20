type option('a) =
  | None
  | Some('a);

/* Not the actual type definition. Just an illustration. */
type list('a) =
  | Empty
  | Head('a, list('a));
