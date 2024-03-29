fn main() {
    let user1 = User {
        name: String::from("hdl"),
        age: 18,
    };
    // user1.age = 19; // 不是 mut 无法改变值
    println!("{:?}", user1);

    let mut user2 = User {
        name: String::from("hdl"),
        age: 18,
    };
    user2.age = 19; // mut 则属性可以被修改

    println!("{:?}", user2);
}

#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}
