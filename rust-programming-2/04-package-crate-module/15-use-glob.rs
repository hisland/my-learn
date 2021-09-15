mod ring1 {
    pub mod ring2 {
        pub mod ring3 {
            pub fn test() {
                println!("{:?}", "test");
            }
            pub fn halo() {
                println!("{:?}", "halo");
            }
        }
    }
}

// glob 所有公有项引入当前作用域
// 小心使用
// 通常在测试中使用
use ring1::ring2::ring3::*;

fn main() {
    halo();
    test();
}
