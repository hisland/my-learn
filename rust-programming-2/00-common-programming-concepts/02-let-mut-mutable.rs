fn main() {
    let mut foo = 1;
    print!("{:?}", foo);

    foo = 3; // 用 let mut 声明的是可修改的变量
    print!("{:?}", foo);
}
