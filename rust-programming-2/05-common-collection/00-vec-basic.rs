fn main() {
    let mut vv1: Vec<i32> = Vec::new(); // 指定泛型类型, 并用函数创建实例
    vv1.push(11);
    vv1.push(22);
    vv1.push(33);
    println!("{:?}", vv1);

    let vv2 = vec![1, 2, 3]; // 与上面一样, 只是使用 vec! 宏, 类型自动推断
    println!("{:?}", vv2);

    // 末尾不再使用 vv1, vv2 自动被销毁
}
