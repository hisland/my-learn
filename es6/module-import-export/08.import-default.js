import mod from './05.export-default.js'; // babel里面此语法只导入 default

import ab from './01.export-single.js'; // 01没有ab则ab为undefined

// 等价于
// import {default as mod} from '05.export-default.js';


console.log(mod);
console.log(ab);
