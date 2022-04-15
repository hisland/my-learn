mod ring1 {
    pub mod ring2 {
        pub mod ring3 {
            pub fn test() {
                println!("{:?}", "test");
                self::ask(); // self 指 ring3, super 是它的上一级 mod
                super::ask(); // 能访问父级的方法, 并用它是 private 的
                super::super::ask(); // 能访问父级的父级的方法, 并用它是 private 的
            }

            fn ask() {
                println!("{:?}", "ask ring3");
            }
        }

        fn ask() {
            println!("{:?}", "ask ring2");
        }
    }

    fn ask() {
        println!("{:?}", "ask ring1");
    }
}

fn main() {
    crate::ring1::ring2::ring3::test();
}
