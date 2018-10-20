let data = "Hello";

let message =
  switch (data) {
  | GoodResult(theMessage) => "halo"
  | BadResult(errorCode) when isServerError(errorCode) => "halo"
  | BadResult(errorCode) => "halo" /* otherwise */
  | NoResult => "halo"
  };
