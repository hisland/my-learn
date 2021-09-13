mod ring1 {
    pub use ring2::test; // re-exporting, 重导出

    pub fn ok() {
        test();
    }
}
mod ring2 {
    pub fn test() {
        println!("{:?}", "test");
    }
}

fn main() {
    // crate::ring1::ok();
    crate::ring1::test(); // 上面 re-exporting, 这里能直接使用到
}
