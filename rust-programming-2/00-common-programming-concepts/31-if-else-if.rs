fn main() {
    let x = 9;
    if x > 9 {
        println!("bigger than 9: {}", x);
    } else if x > 3 {
        println!("range (3-9]: {}", x);
    } else {
        println!("less-or-eq that 3: {}", x);
    }
}
