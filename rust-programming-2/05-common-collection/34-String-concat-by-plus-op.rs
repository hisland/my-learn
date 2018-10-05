fn main() {
    let s1 = String::from("halo");
    let s2 = String::from(" bob");

    let s3 = s1 + &s2;

    // println!("{:?}", s1); // 不可用了
    println!("{:?}", s2);
    println!("{:?}", s3);
}
