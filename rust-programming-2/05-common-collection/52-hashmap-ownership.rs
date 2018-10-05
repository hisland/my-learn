use std::collections::HashMap;

fn main() {
    let s1 = String::from("Blue");
    let s2 = String::from("Yellow");

    let mut h1 = HashMap::new();
    h1.insert(s1, s2);

    // println!("{:?}", s1); // moved, 这里无效了
    // println!("{:?}", s2); // moved, 这里无效了
}
