struct Hello {
    name: String,
}

enum Say {
    Msg1 { name: String }, // 匿名结构体, 这样行
    // Msg2 Hello, // 这样是不行的
    Msg3(Hello), // 作为参数可以
}

fn main() {
    // 正确使用
    let hello1 = Say::Msg1 {
        name: String::from("hello"),
    };

    // 上面不能这样定义, 即也不能这样使用
    // let hello2 = Say::Msg2 {
    //     name: String::from("hello"),
    // };

    // 错误使用参数
    // let hello3 = Say::Msg3({ // 这里要指明结构 Hello
    //     name: String::from("hello"),
    // });
    // 正确使用参数
    let hello3 = Say::Msg3(Hello {
        name: String::from("hello"),
    });
}
