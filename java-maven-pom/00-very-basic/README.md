project-root/
├── pom.xml                # 项目描述文件（核心配置）
├── src/                   # 源码和资源目录
│   ├── main/              # 主程序代码
│   │   ├── java/          # Java 源代码（必须放在这里，包路径必须与包声明一致）
│   │   ├── resources/     # 配置文件、资源文件（编译后会被打进 classpath）
│   │   └── filters/       # 资源过滤文件（可选，替换变量）
│   ├── test/              # 测试相关代码
│   │   ├── java/          # 单元测试代码（JUnit/TestNG）
│   │   └── resources/     # 测试用的资源文件
│   └── site/              # 项目文档（mvn site 插件用，可选）
└── target/                # Maven 构建输出目录（编译后生成的字节码、jar包等）
    ├── classes/           # 编译后的 main/java 和 main/resources
    ├── test-classes/      # 编译后的 test/java 和 test/resources
    ├── generated-sources/ # 代码生成目录（例如 JAXB, annotation processor）
    └── *.jar              # 打包生成的 jar/war/ear 文件


这是pom的标准目录结构

mvn clean package 会在target下面生成 demo-app-1.0.1.jar

java -cp target/demo-app-1.0.0.jar com.example.HelloWorld  这样会执行代码
