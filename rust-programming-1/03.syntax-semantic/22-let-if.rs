fn main() {
    let condition = true;
    let number = if condition {
        5
    } else {
        6
        // "six" // 如果是这个, 会报错, 类型不匹配
    };

    println!("The value of number is: {}", number);
}
