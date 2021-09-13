mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("add_to_waitlist: {:?}", "add_to_waitlist")
        }
    }
}

use crate::front_of_house::hosting; // 从绝对路径引入

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}

fn main() {
    eat_at_restaurant();
}
