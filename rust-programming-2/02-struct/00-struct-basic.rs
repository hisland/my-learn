fn main() {
    // 这里是 结构体 实例
    let user = User {
        name: String::from("hdl"),
        age: 18,
    };
    // println!("{:?}", user); // 这里无法打印, 因为 结构体 没有实现 Debug

    // 注意这里是代码块, 返回了最后一个表达式, 即 age 的值
    let age = {
        user.name;
        user.age
    };

    println!("{:?}", age); // 打印 age 的值
}

// 这里是 结构体 定义
struct User {
    name: String,
    age: u32,
} // 末尾没有 ;号
