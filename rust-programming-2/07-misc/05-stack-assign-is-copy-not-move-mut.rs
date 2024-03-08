fn main() {
    let mut val1 = 123;
    println!("{}", val1);
    let mut val2 = val1; // 栈分配, 是 copy 不是 move
    println!("{}", val2);

    val1 = 99;
    val2 = 100;

    println!("{}", val1); // 2个值都各自修改了的
    println!("{}", val2); // 2个值都各自修改了的
}
