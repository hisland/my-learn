fn main() {
    let user1 = build_user(String::from("hdl"));
    user1.name;
    user1.age;
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
