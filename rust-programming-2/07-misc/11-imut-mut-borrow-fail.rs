fn main() {
    let val1 = 123; // imut
    let val2 = &mut val1; // imut borrow

    println!("{:?}", val1);
    println!("{:?}", val2);
}
