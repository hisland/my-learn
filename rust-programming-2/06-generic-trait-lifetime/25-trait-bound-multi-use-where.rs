pub trait Summarizable {
    fn summary(&self) -> String {
        String::from("this is trait default impl")
    }
}
pub trait Other {
    fn name(&self) -> String {
        String::from("what name")
    }
}


pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summarizable for Tweet {}
impl Other for Tweet {}

pub fn notify<T>(item: T)
    where T: Summarizable + Other
{
    println!("summary: {}", item.summary());
    println!("name: {}", item.name());
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
