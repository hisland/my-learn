#[derive(Debug)]
struct Foo {
    bar: u8,
}

impl Drop for Foo {
    fn drop(&mut self) {
        println!("Dropping Foo!");
    }
}

fn main() {
    let val1;

    val1 = Foo { bar: 3 };

    println!("{:?}", val1);
}
