console.log('i am entry 1')

require('newName/src/dll1.js')
require('newName/src/aa1.js') // 上面的 dll entry 已经加载了这个文件, 这里不再执行
require('newName/src/aa3.js')
