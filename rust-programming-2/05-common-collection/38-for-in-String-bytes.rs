fn main() {
    let s1 = String::from("halo");
    let s2 = String::from("你好呀");

    for ii in s1.bytes() {
        println!("{:?}", ii);
    }
    for ii in s2.bytes() {
        println!("{:?}", ii);
    }
}
