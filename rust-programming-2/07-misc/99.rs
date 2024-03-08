fn main() {
    let val1 = 123; // imut
    let val2 = &val1; // imut borrow, 等价下面的 ref 关键字
    let ref val3 = val1; // imut borrow, 等价上面的 & 变量

    println!("{:?}", val1);
    println!("{:?}", val2);
    println!("{:?}", val3);
}
