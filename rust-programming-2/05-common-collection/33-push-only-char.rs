fn main() {
    let mut bb = String::from("halo bob");

    // push 单个 char
    bb.push('a');
    bb.push('a');

    // push_str 另外的字符串
    bb.push_str("bb");

    println!("{:?}", bb);
}
