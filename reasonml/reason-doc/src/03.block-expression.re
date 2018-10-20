let message = {
  let part1 = "hello";
  let part2 = "world";
  part1 ++ " " ++ part2;
};
/* 这里看不见 `part1` 和 `part2`！ */
print_endline(message); /* 打印 "bye" */
