fn main() {
    let arr = 90..102;
    let mut x = 0;
    for ii in arr{ // 不像 js 里面的 for循环
        println!("loop grade: {} {}", ii, x);
        x = ii
    }
    println!("result grade: {}", x);
}
