fn main() {
    let x = 90;
    let bb = if x >= 90 {
        'a'
    } else if x >= 60 {
        3
    } else {
        'c'
    };
    println!("grade: {}", bb);
}
