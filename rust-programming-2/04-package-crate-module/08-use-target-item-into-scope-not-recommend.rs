mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("add_to_waitlist: {:?}", "add_to_waitlist")
        }
    }
}

use front_of_house::hosting::add_to_waitlist; // 直接引入最终函数

pub fn eat_at_restaurant() {
    add_to_waitlist(); // 这里不再需要前缀, 但是 rust 不推荐这样用
    add_to_waitlist();
    add_to_waitlist();
}

fn main() {
    eat_at_restaurant();
}
