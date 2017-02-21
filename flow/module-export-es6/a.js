// @flow

function aa(a: number, b: number){
  return a * b;
}


export default aa

/*

export 的内容需要在此 module 文件里面设置 annotations
export, import 都需要加上 @flow 才会正确 check



*/
