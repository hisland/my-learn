fn main() {
    let mut vv1: Vec<i32> = Vec::new();
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);

    println!("{:?}", &vv1[0]);
    println!("{:?}", vv1.get(1));
}
