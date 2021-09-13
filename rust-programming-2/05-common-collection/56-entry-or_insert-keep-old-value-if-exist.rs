use std::collections::HashMap;

fn main() {
    let s1 = String::from("Blue");
    let s2 = String::from("Blue");

    let mut h1 = HashMap::new();
    h1.insert(s1, 10);
    h1.entry(s2).or_insert(20); // 10 已经存在, 这里无法更新

    println!("{:?}", h1);
}
