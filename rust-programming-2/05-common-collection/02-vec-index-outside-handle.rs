fn main() {
    let mut vv1: Vec<i32> = Vec::new();
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);

    // println!("{:?}", &vv1[100]); // panic 崩溃, 越界了
    println!("{:?}", vv1.get(101)); // 越界取得 None
}
