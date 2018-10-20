let message = "Product shipped!";

let reply =
  switch (message) {
  | "Reason's pretty cool" => "Yep"
  | "good night" => "See ya!"
  /* | "hello" | "hi" | "heya" | "hey" => "hello to you too!" */
  | "hello"
  | "hi"
  | "heya"
  | "hey" => "hello to you too!"
  | _ => "Nice to meet you!"
  };
