fn main() {
    {
        let aa: u8 = 255; // 最大值
        println!("{:?}", aa);
    }
    {
        let aa: u8 = 256; // 超过无法编译
        println!("{:?}", aa);
    }
}
