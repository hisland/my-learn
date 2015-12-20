console.log('--- 传统 key:value 形式');
var a = {
  hello: function(){
    console.log('god');
  }
}

a.hello();



console.log('--- 新的直接方法形式');
var b = {
  hello(){
    console.log('god 2!');
  }
}

b.hello();
