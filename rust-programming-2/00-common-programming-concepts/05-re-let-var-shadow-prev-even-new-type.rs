fn main() {
    let foo = 3;
    println!("{:?}", foo);

    // 同名变量, 前面的被后面的 shadowed, 遮住, 掩盖
    let foo = foo + 4; // 左侧的 foo 是新的变量, 右侧的 foo 是上面老的变量, 此行之后, 老的已经无法再使用
    let bar = 3;
    println!("{:?}-{:?}", foo, bar);

    let bar = true; // 甚至新变量可以是另外的类型
    println!("{:?}-{:?}", foo, bar);
}
