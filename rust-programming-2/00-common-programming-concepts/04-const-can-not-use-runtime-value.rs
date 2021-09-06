fn two() -> u32 {
    3 + 2
}

fn main() {
    const FOO: u32 = two(); // 不能使用运行时值作为 const

    print!("{:?}", FOO);
}
