use std::collections::HashMap;

fn main() {
    let s1 = String::from("Blue");
    let s2 = String::from("Yellow");

    let mut h1 = HashMap::new();
    h1.insert(s1, 10);
    h1.insert(s2, 20);

    let v1 = h1.get(&String::from("Blue"));

    println!("{:?}", v1);
}
