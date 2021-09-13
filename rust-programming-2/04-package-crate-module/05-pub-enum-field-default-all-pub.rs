mod back_of_house {

    #[derive(Debug)]
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant() {
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;

    println!("order1: {:?}", order1);
    println!("order2: {:?}", order2);
}

fn main() {
    eat_at_restaurant();
}
