fn main() {
    {
        let xx = String::from("hello hdl!");
        let word = first_word(&xx);
        println!("{:?}", word);
        println!("{:?}", xx);
    }
}

// String slice 的类型写法是 &str
fn first_word(str: &String) -> &str {
    let bytes = str.as_bytes();

    for (ii, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &str[0..ii];
        }
    }

    &str[..]
}
