let addCoordinates = (~x, ~y) => {/* 这里使用 x 和 y */};

/* 下面 2 个调用一样, 参数顺序无关 */
addCoordinates(~x=5, ~y=6);
addCoordinates(~y=6, ~x=5);
