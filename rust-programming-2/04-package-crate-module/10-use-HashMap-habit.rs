// 使用 use 引入结构体、枚举和其他项时，习惯是指定它们的完整路径
// 这种习惯用法背后没有什么硬性要求：它只是一种惯例，人们已经习惯了以这种方式阅读和编写 Rust 代码。
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(1, 2);

    println!("map: {:?}", map)
}
