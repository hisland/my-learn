fn main() {
    let ss = "halo bob";

    let mut bb = ss.to_string(); // 从 字面量 to_string 创建
    println!("{:?}", bb);

    bb.push_str(" god");
    println!("{:?}", bb);
}
