## 跳到对应目录, 执行如下命令来测试配置文件

- 启动

```
p=`pwd`; nginx -p $p -c $p/nginx.conf -e $p/../logs/error.log
```

- 退出

```
p=`pwd`; nginx -p $p -c $p/nginx.conf -e $p/../logs/error.log -s quit
```

- 重新加载

```
p=`pwd`; nginx -p $p -c $p/nginx.conf -e $p/../logs/error.log -s reload
```

## 制作新示例

首先在 `tmp` 下执行命令

1. `sudo nginx -s quit` 关掉 nginx

2. 执行 `deno run -A z-deno-watch-reload.js` 监听变化, `tmp/nginx.conf` 修改会自动 reload nginx 的配置

## 备注

- http://nginx.org/en/docs/dev/development_guide.html nginx 使用的是 PCRE 正则表达式
- https://ngapps.cn/php/#!cheatsheet/pcre.md pcre 的一个中文文档
- https://stackoverflow.com/questions/67148337/case-sensitive-in-sensitive-match-not-working-in-nginx 大小写在大小写不敏感的机器上想要起作用需要在正则前面加上 (?-i)
