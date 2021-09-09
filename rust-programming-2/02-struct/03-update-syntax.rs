fn main() {
    let user1 = build_user(String::from("hdl"));
    println!("{:?}", user1);

    let user2 = User {
        age: 20,
        ..user1 // Struct Update Syntax, 注意和 js 的 spread 语法不同
                // js 的 ... 语法是把对象展开覆盖掉前面已定义的属性, 后面如果有同名的属性会把当前展开的值覆盖掉
                // rust 的 .. 会分析前面定义的属性, 将这些已经定义的从 user1 里面排除掉
    };

    println!("{:?}", user2);
}

#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}

fn build_user(name: String) -> User {
    User {
        name, // 这里是上一节的 简写
        age: 18,
    }
}
