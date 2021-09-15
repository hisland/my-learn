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

// use {self}
use ring1::ring2::{
    self, // 这个代表 ring2 自己
    ring3::{
        self, // 这个代表 ring3 自己
        test,
    },
};

fn main() {
    ring2::ring3::halo();
    ring3::halo();
    test();
}
