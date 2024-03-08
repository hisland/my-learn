fn main() {
    {
        let xx = String::from("hello");
        let xx = sub(xx); // 这里值的所有权转移到函数里面去了
        println!("{:?}", xx); // 这里 xx 是新的, 不是上第3行的 xx, shadow 了
    }
}

fn sub(str: String) -> String {
    println!("{:?}", str);
    str
}
