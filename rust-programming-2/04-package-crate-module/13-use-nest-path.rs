mod ring2 {
    pub fn test() {
        println!("{:?}", "test");
    }
    pub fn halo() {
        println!("{:?}", "halo");
    }
}

// use ring2::halo;
// use ring2::test;
// 上面这 2 个 use
// 可以合并写成下面的
use ring2::{halo, test};

fn main() {
    halo();
    test();
}
