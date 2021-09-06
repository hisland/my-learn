fn main() {
    let x = { // 最终 x 是 (),  空的 tup
        3;
        2; // 分号则不是 表达式, 错误
    };
    println!("{:?}", x);
}
