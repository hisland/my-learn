fn main() {
    let user = User {
        name: String::from("hdl"),
        age: 18,
    };
    let age = {
        user.name;
        user.age
    };
}

struct User {
    name: String,
    age: u32,
}
