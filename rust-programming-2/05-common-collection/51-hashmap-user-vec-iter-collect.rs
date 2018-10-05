use std::collections::HashMap;

fn main() {
    let v1 = vec!(String::from("Blue"), String::from("Yellow"));
    let v2 = vec!(10, 20);
    let s1: HashMap<_, _> = v1.iter().zip(v2.iter()).collect();
}
