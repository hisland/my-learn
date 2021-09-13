use std::collections::HashMap;

fn main() {
    let mut s1 = HashMap::new();

    s1.insert(String::from("Blue"), 10);
    s1.insert(String::from("Yellow"), 20);

    println!("{:?}", s1);
}
