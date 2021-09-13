fn main() {
    let mut vv1: Vec<i32> = Vec::new();
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);

    // 可修改借用
    for ii in &mut vv1 {
        // *ii 解引用
        *ii += 100; // 跟这个等价 *ii = *ii + 100
    }

    println!("{:?}", vv1);
}
