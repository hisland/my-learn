/* eslint-disable */ // 块级作用 disable 所有规则

alert('foo');

/* eslint-enable */

/* eslint-disable no-alert, no-console */ // 指定 disable 的规则

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */


alert('foo'); // eslint-disable-line 禁止此行 所有规则
console.log('bar'); // eslint-disable-line no-console 禁止此行 no-console


// 禁止后面一行 所有规则
// eslint-disable-next-line
console.log(3);

// 禁止后面一行 no-console
// eslint-disable-next-line no-console
// eslint-disable-next-line no-console, no-alert
console.log(3);



## 结论

总之,

  * 块级禁止 打开了需要关闭或者不关闭,
  * 行禁止自动关闭

所有规则相当于一个大的对象
  {
    rule1: true,
    rule2: true,
    rule3: true,
    ...
  }

eslint-disable 相当于把全部rule设置为false
eslint-disable rule1, rule2... 相当于把列表里面的设置为false, 其它的不变

eslint-enable 相当于把全部rule设置为true
eslint-enable rule1, rule2... 相当于把列表里面的设置为true, 其它的不变

对于块级嵌套如:
/* eslint-disable */
/* eslint-disable no-alert, no-console */
/* eslint-enable */
/* eslint-enable no-alert, no-console */

每遇到一行就做自己该做的事情, 并不像html那样是标签的开关嵌套关系

