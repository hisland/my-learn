let setColor = color => color;
let startAt = from => from;

let drawCircle = (~color, ~radius=?, ()) => {
  setColor(color);
  switch (radius) {
  | None => startAt(1)
  | Some(r_) => startAt(r_)
  };
};

let whatIsThis = drawCircle(~color=3);
let curriedFunction = drawCircle(~color=3);
let actualResultWithoutProvidingRadius = drawCircle(~color=3, ());
