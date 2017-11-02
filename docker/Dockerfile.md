## COPY 文件

COPY FROM TO
  COPY halo aaa  // 感觉和下面这种相对路径差不多
  COPY ./halo bbb
  COPY /halo ccc //相对于上下文根路径

  有2个隐含条件:
    FROM 是相对上下文的
    TO 是相对于镜像里面的pwd的, 可以通过 WORKDIR $PATH 修改


## 设置环境变量

2种方式

ENV aa1 bb1
ENV aa2=bb2 aa3=bb3


## 设置PWD

这是错误示例, 因为2行是2个命令, 运行在不同的进程
RUN cd /app
RUN echo "hello" > world.txt

正确
WORKDIR /app
RUN echo "hello" > world.txt


## 设置默认命令 CMD

CMD echo $aa1

docker run -it --rm hey:v4   没有指定命令的情况, 使用默认命令
docker run -it --rm hey:v4 /bin/bash 指定命令, 不会使用默认命令


## 设置 ENTRYPOINT

ENTRYPOINT ["echo"]
ENTRYPOINT echo  # 没起作用, 不知道为什么

这样运行镜像可以接收额外的参数, 像普通命令一样
想要运行另外的程序比如bash, 需要 --entrypoint 指定
docker run -it --rm --entrypoint /bin/bash hey:v4


## 同时设置 CMD ENTRYPOINT

ENTRYPOINT ["echo", "$aa1"]
CMD echo god

docker run -it --rm hey:v4
输出: $aa1 /bin/sh -c echo god

docker run -it --rm hey:v4 bbq
输出: $aa1 bbq

不太理解, 感觉是参数替换掉了CMD的内容


## ARG 构建参数


## EXPOSE 声明端口

EXPOSE 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射

EXPOSE 8980 8981 ...


## VOLUME 定义匿名卷

VOLUME设置 目录就会在运行时自动挂载为匿名卷

运行时通过 -v 可以覆盖VOLUME的设置
docker run -d -v mydata:/data IMAGE

##


##


##













