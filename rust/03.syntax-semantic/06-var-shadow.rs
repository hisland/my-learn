fn main() {
    let x = 5;

    let x = x + 1; // 第1次隐藏

    let x = x * 2; // 第2次隐藏

    println!("The value of x is: {}", x);


    let spaces = "   ";
    let spaces = spaces.len(); // 隐藏上一个变量
}
