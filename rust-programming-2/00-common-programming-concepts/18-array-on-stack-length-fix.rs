fn main() {
    let arr = [1, 2, 3];
    let [aa, bb, cc] = arr;

    let kk = arr[3]; // 越界访问, 报错

    println!("{:?}", aa);
    println!("{:?}", bb);
    println!("{:?}", cc);
}
