fn main() {
    let val1 = 123;
    println!("{}", val1);
    let val2 = val1; // 栈分配, 是 copy 不是 move
    println!("{}", val2);

    println!("{}", val1); // val1, val2 是相同的2份值
    println!("{}", val2);
}
