fn main() {
    let black = Color(0, 0, 0);
    let pos1 = Point(0, 0, 0);

    println!("{:?}", black);
    println!("{:?}", pos1);

    // black pos1 不是相同的类型, 虽然定义一样
    // 元组结构体是方便给 元组定义名字吧, 感觉类似其它语言里的 alias, 只是复用了 struct 的语义吧
}

// 这 2 个结构体的数据类型和个数完全一样, 但是它们是 2 个完全不同的结构体, 不能相互赋值
#[derive(Debug)]
struct Color(i32, i32, i32); // 注意末尾的 ;号

#[derive(Debug)]
struct Point(i32, i32, i32);
