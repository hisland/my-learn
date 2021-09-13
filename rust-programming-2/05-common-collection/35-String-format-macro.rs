fn main() {
    let s1 = String::from("halo");
    let s2 = String::from("bob");
    let s3 = String::from("!");

    let s4 = format!("{}-{}-{}", s1, s2, s3);

    println!("{:?}", s4);

    // 所有权都没有转移
    println!("{:?}", s1);
    println!("{:?}", s2);
    println!("{:?}", s3);
}
