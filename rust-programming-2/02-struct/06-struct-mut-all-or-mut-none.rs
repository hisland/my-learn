fn main() {
    // 结构体 要么完全不能改
    let user1 = User {
        name: String::from("hdl"),
        age: 18,
    };
    println!("{:?}", user1);

    // 结构体 要么全部属性可改
    let mut user2 = User {
        name: String::from("hdl"),
        age: 18,
    };
    user2.name = String::from("god");
    user2.age = 999;
    println!("{:?}", user2);

    // https://doc.rust-lang.org/book/ch05-01-defining-structs.html#defining-and-instantiating-structs
    // 好像没有部分可改的情况
}

#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}
