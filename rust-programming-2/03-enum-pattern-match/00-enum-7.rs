struct Hello {
    name: String,
}

#[derive(Debug)]
enum Say {
    Msg1 { name: String }, // 匿名结构体, 这样行
}

impl Say {
    fn say(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    // 正确使用
    let hello1 = Say::Msg1 {
        name: String::from("hello"),
    };

    hello1.say()
}
