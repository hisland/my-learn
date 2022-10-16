const bb1 = new Blob(["我"]);
console.log("bb: ", bb1);

const ab1 = await bb1.arrayBuffer();
console.log("ab: ", ab1);

const u81 = new Uint8ClampedArray(ab1);
console.log("u8: ", u81);

{
  const bb2 = new Blob(u81); // 注意这里没[]起来, 结果变成数字字符串了
  console.log("bb2: ", bb2);

  const td2 = new TextDecoder();
  const ab2 = await bb2.arrayBuffer();
  console.log("td2: ", td2.decode(ab2));
}

{
  const bb2 = new Blob([u81]); // 数组, 正确
  console.log("bb2: ", bb2);

  const td2 = new TextDecoder();
  const ab2 = await bb2.arrayBuffer();
  console.log("td2: ", td2.decode(ab2));
}
