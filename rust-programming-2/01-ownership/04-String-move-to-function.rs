fn main() {
    {
        let xx = String::from("hello");
        sub(xx); // 这里值的所有权转移到函数里面去了
        println!("{:?}", xx); // 这里 xx 不再具有所有权,所以不能使用
    }
}

fn sub(str: String) {
    println!("{:?}", str);
}
