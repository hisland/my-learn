mod ring1 {
    pub mod ring2 {
        pub fn test() {
            println!("{:?}", "test");
            super::ask(); // 能访问父级的方法, 并用它是 private 的
        }
    }

    fn ask() {
        println!("{:?}", "ask");
    }
}

fn main() {
    crate::ring1::ring2::test();
}
