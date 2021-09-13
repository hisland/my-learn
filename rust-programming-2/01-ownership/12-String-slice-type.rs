fn main() {
    {
        let xx = String::from("hello hdl!");
        let word = first_word(&xx);
        println!("{:?}", word);
        println!("{:?}", xx);
    }
}

// String slice 的类型写法是 &str
fn first_word(ss: &String) -> &str {
    let bytes = ss.as_bytes();

    for (ii, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &ss[0..ii];
        }
    }

    &ss[..]
}
