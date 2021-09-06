fn main() {
    {
        let mut xx = String::from("hello"); // 注意必须是可变变量
        println!("{:?}", xx);
        change_str(&mut xx); // 才能传递可变引用
        println!("{:?}", xx);
    }
}

fn change_str(str: &mut String) {
    str.push_str(" god");
}
