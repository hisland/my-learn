## 测试

1. `npm install -g http-server' 安装 http-server 命令
2. 在当前目录下启动 2 个 http-server

- http-server . -p 9701
- http-server . -p 9702

3. 浏览器打开 http://localhost:9701/a-a.html

## 说明

页面 iframe 嵌套加载

```
localhost:9701/aa.html
  localhost:9702/bb.html
    localhost:9701/cc.html
```

cc.html 可以通过 parent.parent 访问 aa.html 的内容
