pub trait Summarizable {
    fn summary(&self) -> String {
        String::from("this is trait default impl")
    }
}


pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summarizable for Tweet {}

pub fn notify<T: Summarizable>(item: T) {
    println!("Breaking news! {}", item.summary());
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };

    notify(tweet);
}
