fn main() {
    let val1 = sub1();
    println!("{}", val1);

    let val2 = sub2();
    println!("{}", val2);

    let val3 = sub3();
    println!("{:?}", val3);

    let val4 = sub4();
    println!("{}", val4);
}

fn sub1() -> i32 {
    33
}

fn sub2() -> char {
    'h'
}

fn sub3() -> String {
    "yes".to_string()
}

fn sub4() -> bool {
    true
}
