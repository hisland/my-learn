fn main() {
    {
        let xx = String::from("hello");
        let yy = xx.clone(); // 是复制
        println!("{:?} {:?}", xx, yy); // 这里 xx 依然有效
    }
}
