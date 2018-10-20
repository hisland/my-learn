type myResponseVariant =
  | Yes
  | No
  | PrettyMuch;

let areYouCrushingIt = Yes;

let message =
  switch (areYouCrushingIt) {
  | No => "No worries. Keep going!"
  | Yes => "Great!"
  | PrettyMuch => "Nice!"
  };
/* message 为 "Great!" */
