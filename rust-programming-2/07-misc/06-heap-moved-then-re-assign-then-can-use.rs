fn main() {
    let mut val1 = String::from("god");
    println!("{}", val1);
    let mut val2 = val1; // 堆分配, 是 move 不是 copy
    println!("{}", val2);

    val1 = String::from("halo"); // 赋新值
    val2 = String::from("mike");

    println!("{}", val1); // 这里又能使用了
    println!("{}", val2);
}
