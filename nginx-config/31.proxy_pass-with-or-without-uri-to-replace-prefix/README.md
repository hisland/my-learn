curl -v http://localhost:9999/halo 9999 访问的是 /halo
转发到 9998 是 /bbq/halo

curl -v http://localhost:9999/some/god/yes 9999 访问的是 /some/god/yes
转发到 9998 是 /helo/god/yes
自动把 /some 替换成了 /helo
