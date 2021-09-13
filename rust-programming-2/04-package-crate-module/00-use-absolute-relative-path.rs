mod ring1 {
    pub mod ring2 {
        pub fn test() {
            println!("{:?}", "test");
        }
    }
}

fn main() {
    crate::ring1::ring2::test(); // 绝对路径

    ring1::ring2::test(); // 相对路径
    self::ring1::ring2::test(); // 相对路径
}
