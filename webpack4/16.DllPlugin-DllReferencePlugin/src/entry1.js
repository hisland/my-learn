console.log('i am entry 1')

require('newName1/src/pkg1/dll1.js')

require('newName1/src/pkg1/aa1.js') // 上面的 dll entry 已经加载了这个文件, 这里不再执行
require('newName1/src/cc1.js')

require('newName2/src/pkg2/dll2.js')
