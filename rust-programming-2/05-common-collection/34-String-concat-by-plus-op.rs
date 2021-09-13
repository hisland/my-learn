fn main() {
    let s1 = String::from("halo");
    let s2 = String::from(" bob");

    let s3 = s1 + &s2; // s1 moved

    // println!("{:?}", s1); // 不可用了
    println!("{:?}", s2);
    println!("{:?}", s3);

    // &String 可以被 强转（coerced）成 &str
    // Rust 使用了一个被称为 Deref 强制转换（deref coercion）的技术，你可以将其理解为它把 &s2 变成了 &s2[..]
}
