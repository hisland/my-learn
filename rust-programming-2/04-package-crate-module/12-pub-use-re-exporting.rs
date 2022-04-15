mod ring1 {
    pub use ring2::test; // re-exporting, 重导出
    pub use ring2::test as god; // re-exporting, 重导出

    pub fn ok() {
        test();
        god();
    }
}
mod ring2 {
    pub fn test() {
        println!("{:?}", "test");
    }
}

fn main() {
    crate::ring1::test(); // 上面 re-exporting, 这里能直接使用到
    crate::ring1::god(); // 上面 re-exporting, 这里能直接使用到, 并且命名了

    println!("{:?}", "---");
    crate::ring1::ok(); // 并且它内部也能用到
}
