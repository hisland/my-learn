fn two() -> u32 {
    3 + 2
}

fn main() {
    const FOO: u32 = two();

    print!("{:?}", FOO);
}
