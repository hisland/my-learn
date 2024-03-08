fn main() {
    let val1 = 123; // imut
    let val2 = &val1; // imut borrow

    println!("{:?}", val1);
    println!("{:?}", val2);
}
