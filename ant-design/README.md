## 说明

1. 首先 `npm i -d` 安装依赖

2. 在当前目录执行 `npm run dev`, 配置相关在 `vite.config.js` 里面修改

3. `js/jsx` 需要在代码末尾添加下面这段代码来启用 HMR, 这是最简单的,
   并且入口 `script` 标签需要加上 `type="module"`, 使用 module,
   如果只在顶层代码里面加上, 被引用的代码会触发从这个文件重新执行, 这也是最简单的方式
   如果每个文件都加, 则需要自己处理相应的应用逻辑, 这个太复杂还没有尝试理解过

```
if (import.meta.hot) {
  import.meta.hot.accept()
}
```
