function a(){
  console.log('i am in a');
}
function b(){
  console.log('i am in b');
}

let obj = {
  a: a,
  b: b
}
export {obj as default}

// 等价于
// export default obj
