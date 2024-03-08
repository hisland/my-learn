fn main() {
    let mut val1 = 123; // mut
    let val2 = & val1; // imut borrow

    println!("{:?}", val1);
    println!("{:?}", val2);
}
