let xStart = 1;
let xEnd = 3;

/* 打印：1 2 3 */
for (x in xStart to xEnd) {
  print_int(x);
  print_string(" ");
};

let xStart = 3;
let xEnd = 1;

/* 打印：3 2 1 */
for (x in xStart downto xEnd) {
  print_int(x);
  print_string(" ");
};

Random.self_init();

let break = ref(false);

while (! break^) {
  if (Random.int(10) === 3) {
    break := true;
  } else {
    print_endline("hello");
  };
};
