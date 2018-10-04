fn main() {
    let x = 5;

    let y = {
        let x = 3;
        x + 1 // 不要分号, 作为{}的返回值
    };

    println!("The value of y is: {}", y);
}
