type payload =
  | BadResult(int)
  | GoodResult(string)
  | NoResult;

let data = GoodResult("Product shipped!");

let message =
  switch (data) {
  | GoodResult(theMessage) => "Success! " ++ theMessage
  | BadResult(errorCode) =>
    "Something's wrong. The error code is: " ++ string_of_int(errorCode)
  };
