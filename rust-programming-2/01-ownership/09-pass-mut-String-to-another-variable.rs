fn main() {
    {
        let mut xx = String::from("hello"); // 注意必须是可变变量
        println!("{:?}", xx);
        let some = &mut xx; // 赋值给变量一个道理
        some.push_str(" god");
        println!("{:?}", xx);
    }
}
