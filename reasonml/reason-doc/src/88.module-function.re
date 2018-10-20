module type Comparable = {
  type t;
  let equal: (t, t) => bool;
};

module MakeSet = (Item: Comparable) => {
  /* let's use a list as our naive backing data structure */
  type backingType = list(Item.t);
  let empty = [];
  let add = (currentSet: backingType, newItem: Item.t): backingType =>
    /* if item exists */
    if (List.exists(x => Item.equal(x, newItem), currentSet)) {
      currentSet; /* return the same (immutable) set (a list really) */
    } else {
      [
        newItem,
        ...currentSet /* prepend to the set and return it */
      ];
    };
};
