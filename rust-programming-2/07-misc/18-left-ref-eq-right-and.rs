fn main() {
    let val1 = 123; // imut
    let val2 = &val1; // imut borrow, 等价下面的 ref variable
    let ref val3 = val1; // imut borrow, 等价上面的 & variable

    println!("{:?}", val1);
    println!("{:?}", val2);
    println!("{:?}", val3);
}
