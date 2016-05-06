// 这些变量没有挂在 global 上(无法使用 global.xxx 得到), 但是是每个模块(file级别) 独立的


console.log(__filename);
console.log(__dirname);

// 此模块的描述信息, 如 id, parent, filename, loaded...
// 官方文档: In each module, the module free variable is a reference to the object representing the current module.
console.log(module);


// 此模块向外部导出的内容
console.log(exports);


// 用于加载此模块依赖的其它模块的 exports 对象,
// require.cahce 指向 进程级别(不是process对象)的cache
// require.main 指向 node 进程启动时候最初那个js, 比如 node app.js, 所有的main都指向 app.js
// require.extensions 用于 查找文件, 指定一个 name , 它默认会尝试它 name.js name.node name.json
console.log(require);



