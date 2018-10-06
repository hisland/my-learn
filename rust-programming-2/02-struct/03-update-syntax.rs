fn main() {
    let user1 = build_user(String::from("hdl"));
    let user2 = User {
        age: 20,
        ..user1
    };
}

struct User {
    name: String,
    age: u32,
}

fn build_user(name: String) -> User {
    User {
        name,
        age: 18,
    }
}
