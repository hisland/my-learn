

# 执行 main
mvn exec:java -Dexec.mainClass="hdl.pkg4.Bar" -Dexec.classpathScope=runtime


# 输出 classpath 列表
mvn dependency:build-classpath -DincludeScope=runtime
