pub trait Summarizable {
    fn summary(&self) -> String {
        String::from("(Read more...)")
    }
}


pub fn notify<T: Summarizable>(item: T) {
    println!("Breaking news! {}", item.summary());
}

// multi
fn some_function<T: Display + Clone, U: Clone + Debug>(t: T, u: U) -> i32 {

}
