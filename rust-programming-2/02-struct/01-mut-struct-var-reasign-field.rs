fn main() {
    let user1 = User {
        name: String::from("hdl"),
        age: 18,
    };
    user1.age = 19;

    let mut user2 = User {
        name: String::from("hdl"),
        age: 18,
    };
    user2.age = 19;
}

struct User {
    name: String,
    age: u32,
}
