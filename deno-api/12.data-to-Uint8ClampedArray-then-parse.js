const text1 = "我";
console.log("text1: ", text1);
const bb1 = new Blob([text1]);
console.log("bb1: ", bb1);

const obj = {
  aa: 1,
  bb: "ss",
};

const text2 = JSON.stringify(obj);
console.log("text2: ", text2);
const bb2 = new Blob([text2]);
console.log("bb2: ", bb2);

const ab1 = await bb1.arrayBuffer();
console.log("ab1: ", ab1);
{
  const u81 = new Uint8ClampedArray(ab1);
  console.log("u81: ", u81);
}
const ab2 = await bb2.arrayBuffer();
console.log("ab2: ", ab2);
{
  const u81 = new Uint8ClampedArray(ab2);
  console.log("u81: ", u81);
}
const ab3 = new ArrayBuffer(10);
console.log("ab3: ", ab3);
{
  const u81 = new Uint8ClampedArray(ab3);
  console.log("u81: ", u81);
}

console.log("ab1.byteLength: ", ab1.byteLength);
console.log("ab2.byteLength: ", ab2.byteLength);
console.log("ab3.byteLength: ", ab3.byteLength);
const totalLength = ab1.byteLength + ab2.byteLength + ab3.byteLength;

const u81 = new Uint8ClampedArray(totalLength);
console.log("u81.byteLength: ", u81.byteLength);

u81.set([ab1], 0);
console.log("u81: ", u81);

{
  const bb1 = new Blob([ab2, ab3, ab1]);
  console.log("bb1: ", bb1);
  const ab9 = await bb1.arrayBuffer();
  console.log("ab9: ", ab9);
  const u81 = new Uint8ClampedArray(ab9);
  console.log("u81: ", u81);

  const idx = u81.indexOf(0);
  console.log("u81[idx]: ", u81[idx]);
  console.log("u81[idx+1]: ", u81[idx + 1]);
  console.log("u81[idx+2]: ", u81[idx + 2]);
  if (u81[idx] === 0 && u81[idx + 1] === 0 && u81[idx + 2] === 0) {
    const part1 = u81.subarray(0, idx);
    console.log("part1: ", part1);
    const part2 = u81.subarray(idx, idx + 10);
    console.log("part2: ", part2);
    const part3 = u81.subarray(idx + 10);
    console.log("part3: ", part3);

    const td2 = new TextDecoder();
    const jsonStr = td2.decode(part1);
    console.log("jsonStr: ", jsonStr);
  }
}
