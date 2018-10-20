let message =
  if (showMenu) {
    displayMenu();
  };

/* 基本上与下列相等 */
let message =
  if (showMenu) {
    displayMenu(); /* 这 2 个的返回值要一样 */
  } else {
    (); /* 这 2 个的返回值要一样 */
  };
