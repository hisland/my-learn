./
├── pkg1/  放置第1套代码
│   └── sub/
│       ├── Hello.class
│       └── Hello.java
├── pkg2/  放置第2套代码
│   └── sub/
│       ├── Hello.class
│       └── Hello.java
└── README.md


jar -cvf p1.jar -C pkg1 sub   生成第1套 pkg
jar -cvf p2.jar -C pkg2 sub   生成第2套 pkg

java -cp p1.jar sub.Hello 使用第1套
java -cp p2.jar sub.Hello 使用第2套
