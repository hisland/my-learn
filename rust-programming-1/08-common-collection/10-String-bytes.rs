fn main() {
    let ss = String::from("不要这样");
    for vv in ss.bytes() {
        println!("{}", vv);
    }
}
