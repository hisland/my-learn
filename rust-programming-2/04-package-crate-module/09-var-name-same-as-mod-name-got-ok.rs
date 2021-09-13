mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist(ss: &String) {
            println!("add_to_waitlist: {:?}", ss)
        }
    }
}

use crate::front_of_house::hosting; // item hosting

pub fn eat_at_restaurant() {
    let hosting = String::from("god"); // var hosting

    hosting::add_to_waitlist(&hosting); // 这里能自动区分重名的不同内容
    hosting::add_to_waitlist(&hosting);
    hosting::add_to_waitlist(&hosting);
}

fn main() {
    eat_at_restaurant();
}
