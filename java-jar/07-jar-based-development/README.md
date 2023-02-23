分别将 pack1, pack2 生成 pack1.jar pack2.jar

`java Hello` 相当于 `java -cp . Hello`, Hello 调用的 Foo 是 pwd 的, 输出 Foo main in root
`java -cp pack1.jar:. Hello`, Hello 调用的 Foo 是 pack1 的, 输出 Foo main pack1
`java -cp pack2.jar:. Hello`, Hello 调用的 Foo 是 pack2 的, 输出 Foo main pack2
`java -cp .:pack1.jar Hello`, Hello 调用的 Foo 是 pwd 的, 输出 Foo main in root
`java -cp .:pack2.jar Hello`, Hello 调用的 Foo 是 pwd 的, 输出 Foo main in root

所以, 不同 path,jar 里面的相同的 class, 会根据 classpath 的顺序优先查找, 这也是 jar 包开发的原理吧, 我们只需要将当前目录设置为优先, 然后当遇到需要修改某个 class 实现, 只需要将 jar 包里面对应的那个 copy 出来改就行了, 剩下的还是在 jar 包里面