use std::collections::HashMap;

fn main() {
    let s1 = String::from("Blue");
    let s2 = String::from("Blue");

    let mut h1 = HashMap::new();
    h1.insert(s1, 10);
    h1.insert(s2, 20); // 覆盖掉上一行设置的 10

    println!("{:?}", h1);
}
