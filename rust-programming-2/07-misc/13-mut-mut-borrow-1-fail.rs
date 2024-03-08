fn main() {
    let mut val1 = 123; // mut
    let val2 = &mut val1; // mut borrow

    println!("{:?}", val1); // 这里会产生 imut borrow, 报错
    println!("{:?}", val2);
}
