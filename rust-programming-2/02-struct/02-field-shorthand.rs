fn main() {
    let user1 = build_user(String::from("hdl"));

    println!("{:?}", user1.name);
    println!("{:?}", user1.age);
}

struct User {
    name: String,
    age: u32,
}

fn build_user(name: String) -> User {
    User {
        name, // 跟 js 一样, prop, variable 名字相同时, 省略为一个标识符简写
        age: 18,
    }
}
