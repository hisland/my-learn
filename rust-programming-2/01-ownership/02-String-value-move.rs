fn main() {
    {
        let xx = String::from("hello");
        let yy = xx; // 这里所有权从 xx 转移给 yy 了
        println!("{:?} {:?}", xx, yy); // 这里 xx 已经不能再使用
    }
}
