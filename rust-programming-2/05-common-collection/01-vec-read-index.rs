fn main() {
    let mut vv1: Vec<i32> = Vec::new();
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);

    println!("{:?}", &vv1[0]); // 得到值, 或者 panic崩溃
    println!("{:?}", vv1.get(1)); // 得到 Some 或者 None
}
