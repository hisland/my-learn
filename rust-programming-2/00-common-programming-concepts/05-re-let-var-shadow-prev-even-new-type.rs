fn main() {
    let foo = 3;
    print!("{:?}", foo);

    let foo = foo + 4;
    let bar = 3;
    print!("{:?}-{:?}", foo, bar);

    let bar = true;
    print!("{:?}-{:?}", foo, bar);
}
