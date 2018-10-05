fn main() {
    let mut x = 90;
    loop {
        x = x + 1;
        if x > 100 {
            break
        }
    };
    println!("grade: {}", x);
}
