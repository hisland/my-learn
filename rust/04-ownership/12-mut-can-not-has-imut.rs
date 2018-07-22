fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem  不可变引用 可以有多个
    let r3 = &mut s; // BIG PROBLEM
}
