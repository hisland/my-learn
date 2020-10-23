## 说明

1. 首先全局安装 `vite`

2. 在 `learn` 目录下面执行 `vite serve --port 9527 --jsx react ant-design`, 端口, 目标目录可以根据需要修改

3. `js/jsx` 需要在代码末尾添加下面这段代码来启用 HMR,
   并且 `script` 标签需要加上 `type="module"`

```
if (import.meta.hot) {
  import.meta.hot.accept()
}
```
