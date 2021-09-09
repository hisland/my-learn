fn main() {
    let a = [1, 2, 3, 4, 5];

    let slice = &a[1..3]; // 从 0 开始索引, 这里取的 2,3

    println!("{:?}", slice);
}
