fn main() {
    let mut s = String::from("hello");

    change(&mut s);

    println!("{:?}", s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world"); // 3个地方 mut, 可以改变
}
