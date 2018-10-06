fn main() {
    let r;

    {
        let x = 5;
        r = &x; // error
    }

    println!("r: {}", r);
}
