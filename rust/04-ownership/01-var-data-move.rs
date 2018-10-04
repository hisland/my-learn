fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // 所有权转移

    println!("{}, world!", s1); // 不能再使用
}
