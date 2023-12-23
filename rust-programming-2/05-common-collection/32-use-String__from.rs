fn main() {
    // 跟 "halo bob".to_string() 应该是一样的
    let mut bb = String::from("halo bob");
    bb.push_str(" god");

    println!("{:?}", bb);
}
