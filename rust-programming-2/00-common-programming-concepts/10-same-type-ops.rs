fn main() {
    let f1 = 3 + 2;
    // let f2 = 3 + 2.0; // error no implementation for `{integer} + {float}`
    let f3 = 3.0 + 2.0;

    println!("{}", f1);
    // println!("{}", f2);
    println!("{}", f3);
}
