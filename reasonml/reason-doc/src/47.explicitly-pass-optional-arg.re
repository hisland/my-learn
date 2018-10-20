let setColor = color => color;
let startAt = from => from;

let drawCircle = (~color, ~radius=?, ()) => {
  setColor(color);
  switch (radius) {
  | None => startAt(1)
  | Some(r_) => startAt(r_)
  };
};

/* payloadRadius 不确定是什么, 下面 2 种方式等价 */
let result =
  switch (payloadRadius) {
  | None => drawCircle(~color, ())
  | Some(r) => drawCircle(~color, ~radius=r, ())
  };

let result = drawCircle(~color, ~radius=?payloadRadius, ());
