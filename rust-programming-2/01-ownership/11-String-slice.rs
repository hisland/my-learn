fn main() {
    {
        let mut xx = String::from("hello hdl!"); // 注意必须是可变变量
        println!("{:?}", xx);
        {
            let some1 = &xx[2..5];
            println!("{:?}", some1);
        }
        {
            let some1 = &xx[..5]; // 开始为 0
            println!("{:?}", some1);
        }
        {
            let some1 = &xx[6..]; // 结尾为 xx 的长度, 此处相当于10
            println!("{:?}", some1);
        }
        {
            let some1 = &xx[..10];
            println!("{:?}", some1);
        }
    }
}
