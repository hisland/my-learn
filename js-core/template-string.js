var god = 'me';


console.log(`
oh god is ${god},
  next line:
原样输出

`); // 支持直接多行

function tag(tpl, a, b){ // 插值依次传入
  console.log(arguments);
  return 33;
}

var say = 'say', halo = 'halo', obj={tt: 'may'};

// 模板 tag
var b = tag`a god, ${say} ${halo}, ${obj.tt}`;
console.log('return from tag: ', b);


console.log(`

`);
console.log(`oh god is ${god}, not is ${not}`); // god 在相应作用域有值被解析了, not报错
