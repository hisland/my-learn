fn main() {
    {
        let xx = "hello hdl!"; // 字符串字面量类型是 &str, 是一个 slice, 不可变引用
        println!("{:?}", xx);
    }
}
