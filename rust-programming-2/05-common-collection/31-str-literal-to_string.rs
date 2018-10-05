fn main() {
    let ss = "halo bob";

    let mut bb = ss.to_string();
    bb.push_str(" god");

    println!("{:?}", bb);
}
