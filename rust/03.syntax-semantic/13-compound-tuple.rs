fn main() {
    let aa: (i32, f64, u8) = (500, 6.4, 1);

    let (x, y, z) = aa; // destructuring

    println!("The value of y is: {}", y);
    println!("The value of x(aa.0) is: {}", aa.0);
}
