fn main() {
    let mut vv1: Vec<i32> = Vec::new();
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);

    // for ii in &vv1 {
    for ii in vv1 {
        println!("{:?}", ii);
    }
}
