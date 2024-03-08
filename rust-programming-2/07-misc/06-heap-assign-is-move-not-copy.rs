fn main() {
    let val1 = String::from("god");
    println!("{}", val1);
    let val2 = val1; // 堆分配, 是 move 不是 copy
    println!("{}", val2);

    println!("{}", val1); // 这里已经不能再使用, 报错
    println!("{}", val2);
}
