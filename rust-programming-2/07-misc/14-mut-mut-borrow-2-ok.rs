fn main() {
    let mut val1 = 123; // mut
    let val2 = &mut val1; // mut borrow

    println!("{:?}", val2); // 这里是最后一次用 val2, 用完则释放
    println!("{:?}", val1); // 后续用 val1 ok
}
