mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {
            println!("add_to_waitlist: {:?}", "add_to_waitlist")
        }
    }
}

use front_of_house::hosting::add_to_waitlist as name2; // 引入时改成 别名

pub fn eat_at_restaurant() {
    name2(); // 使用 别名
    name2();
    // add_to_waitlist(); // 原名无法使用
}

fn main() {
    eat_at_restaurant();
}
