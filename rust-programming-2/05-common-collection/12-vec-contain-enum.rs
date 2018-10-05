fn main() {
    let mut vv1: Vec<KK> = Vec::new();
    vv1.push(KK::AA(12));
    vv1.push(KK::BB(99));
    vv1.push(KK::CC(String::from("halo")));

    // ok no error
}

enum KK {
    AA(i32),
    BB(u32),
    CC(String),
}
